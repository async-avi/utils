async function anyName(param: any) {
    //this request has to be a post request with a data included otherwise it will be rejected
    const resp = await axios.post("url", {"data"}, {
        withCredentials: true,
    })
}
