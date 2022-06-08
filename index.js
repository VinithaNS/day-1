// 2.Write a blog on Difference between HTTP1.1 vs HTTP2
// HTTP 1.1:
// (i).Key Features:It supports connection reuse i.e. for every TCP connection there could be multiple requests and responses,and pipelining where the client can request several resources from the server at once.
// (ii).Status code:Introduces a warning header field to carry additional information about the status of a message.Can define  24 status codes,error reporting is quicker and more efficient.
// (iii).Authentication Mechanism:It is relatively secure since it uses digest authentication,NTLM authentication.
// (iv).Caching:Expands on the caching support by using additional headers like cache-control, conditional headers like If-Match and by using entity tags.
// (v).Web Traffic:HTTP/1.1 provides faster delivery of web pages and reduces web traffic as compared to HTTP/1.0.


// HTTP 2:
// (i).Key Features:Uses multiplexing, where over a single TCP connection resources to be delivered are interleaved and arrive at the client almost at the same time. It also provides a feature called server push that allows the server to send data that the client will need but has not yet requested.
// (ii).Status code:Underlying semantics of HTTP such as headers, status codes remains the same.
// (iii).Authentication Mechanism:Security concerns from previous versions will continue to be seen in HTTP/2. However, it is better equipped to deal with them due to new TLS features like connection error of type Inadequate_Security.
// (iv).Caching:HTTP/2 does not change much in terms of caching. With the server push feature if the client finds the resources are already present in the cache, it can cancel the pushed stream.
// (v).Web Traffic:HTTP/2 utilizes multiplexing and server push to effectively reduce the page load time by a greater margin along with being less sensitive to network delays.



//3. Write a blog about objects and its internal representation in Javascript
// Objects and its Internal Representation in Javascript.
// (i).Object consists of "key:value" pairs(Ex:number,string,boolean,null,undefined and symbol).
// Syntax of object: var objectname={};
// Example: var studentname={
    // first name:"Neya";
    // last name:"shree";
    // age:23;
    // }