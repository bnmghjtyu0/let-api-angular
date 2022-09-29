import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'let-api-angular';

  constructor(private httpClient: HttpClient) {}
  download() {
    this.httpClient
      .post<{ data: { fileByteArray: any; fileName: any } }>(
        'http://localhost:3000/api/test/pdf',
        {}
      )
      .subscribe((res) => {
        const { fileByteArray, fileName }: any = res.data;

        //下載
        const blobFile = this.covertToBlob(fileByteArray, fileName);
        const blobURL = window.URL.createObjectURL(blobFile);
        const link = document.createElement('a');
        link.download = fileName;
        link.href = blobURL;
        link.target = '_blank';
        console.log(link);
        link.click();
      });
  }
  preview() {
    this.httpClient
      .post<{ data: { fileByteArray: any; fileName: any } }>(
        'http://localhost:3000/api/test/pdf',
        {}
      )
      .subscribe((res) => {
        const { fileByteArray, fileName }: any = res.data;

        //預覽
        const blobFile = this.covertToBlob(fileByteArray, fileName);
        const blob = new Blob([blobFile], { type: 'application/pdf' });
        const blobURL = window.URL.createObjectURL(blob);
        window.open(blobURL);
      });
  }

  /**
   * 轉換為 blob
   *
   * @param file - 檔案
   * @param mimeType - 檔案 mine 類型
   * @returns Blob
   */
  covertToBlob(file: Blob | string, mimeType: string): Blob {
    // base64
    if (typeof file === 'string') {
      // base64 轉 blob
      const byteArray = this.base64ToByteArray(file);
      file = new Blob([byteArray], { type: mimeType });
    }

    return file;
  }

  /**
   * base64 轉 byteArray
   *
   * @param base64 - base64 字串
   * @returns byteArray
   */
  base64ToByteArray(base64: string): Uint8Array {
    return new Uint8Array(
      atob(base64)
        .split('')
        .map((char) => char.charCodeAt(0))
    );
  }
}
