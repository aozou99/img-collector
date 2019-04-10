const optionKeys = ['saveDirectory', 'subDirectory', 'autoDownload', 'conflictAction'];
export default class ChromeStorage {
  public static async getSync(
    keys: string | string[],
  ): Promise<{
    [key: string]: any;
  }> {
    return chrome.storage.sync.get(keys);
  }

  public static async setSync(key: string, value: any) {
    chrome.storage.sync.set({ [key]: value });
  }

  public static async getOptions(): Promise<{ [key: string]: any }> {
    const op = await ChromeStorage.getSync(optionKeys);
    return {
      saveDirectory: op.saveDirectory || 'img-collector',
      subDirectory: op.subDirectory || 'domain',
      autoDownload: op.autoDownload || false,
      conflictAction: op.conflictAction || 'overwrite',
    };
  }
}
