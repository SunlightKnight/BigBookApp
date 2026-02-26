// BackendServiceProvider MUST implement all the functions defined inside its interface.
export default interface BackendServiceInterface {
  getBookList: (queryString: string) => Promise<any>
}