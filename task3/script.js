maxid = 20;
var photoPosts = [
    {
        id: 1,
        description: "1 PhotoPost",
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_960_720.jpg",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 2,
        description: "2 PhotoPost",
        createdAt: new Date('2018-03-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://cdn.pixabay.com/photo/2017/05/21/15/14/balloon-2331488_960_720.jpg",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 3,
        description: "3 PhotoPost",
        createdAt: new Date('2017-02-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1cy2o6saNYhX85n8SGV3m-asKAePLC0-bgei-WSF6rkFjFh1-g",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 4,
        description: "4 PhotoPost",
        createdAt: new Date('2010-02-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://c1.staticflickr.com/4/3736/32762943674_2456ce495c_b.jpg",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 5,
        description: "5 PhotoPost",
        createdAt: new Date('2011-02-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprDPSfM47I5Qd-44pYYrH3v_VHFyEa7vJF7nXM_BaBdKw14YqhQ",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 6,
        description: "6 PhotoPost",
        createdAt: new Date('2018-02-23T23:22:00'),
        author: 'Kukel',
        photoLink: "http://www.kartinki24.ru/uploads/gallery/main/79/kartinki24_ru_animals_hamsters_0008.jpg",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 7,
        description: "7 PhotoPost",
        createdAt: new Date('2018-02-23T23:21:00'),
        author: 'Kukel',
        photoLink: "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/1/2/1357143691025/Tomb-Raider.jpg-008.jpg",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 8,
        description: "8 PhotoPost",
        createdAt: new Date('2016-02-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthlkqoh9cZmSBunxcstcAbXqxFUOF576g8QQdVmss2xAhsROs",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 9,
        description: "9 PhotoPost",
        createdAt: new Date('2018-02-23T23:00:43'),
        author: 'Kukel',
        photoLink: "http://road.cc/sites/default/files/styles/main_width/public/shimano-ultegra-r8000-mechanical-and-rim-brake-1.jpg?itok=E-tBK0mX",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 10,
        description: "10 PhotoPost",
        createdAt: new Date('2008-02-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://c3.staticflickr.com/3/2858/10683038095_cc9bbcdee2_b.jpg",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 11,
        description: "11 PhotoPost",
        createdAt: new Date('2008-12-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://media-cdn.tripadvisor.com/media/photo-s/12/5d/31/11/20180314-104925-largejpg.jpg",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 12,
        description: "12 PhotoPost",
        createdAt: new Date('2016-12-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IUINxxW5ydFpbby37mzUljxdZVfEhI1UZLcjI0WG8dCz9sMV",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 13,
        description: "13 PhotoPost",
        createdAt: new Date('2018-02-23T21:00:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEGGREIfkqy44rk7axiSJcqtD44gObS3RUrRIXV_AEp5xhj7E",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 14,
        description: "14 PhotoPost",
        createdAt: new Date('2018-02-23T23:00:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr0GL6ALS2UmVXi7v0Z0TXE6uaRqMVfN7NPoDvCTjYMHpw1m5",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 15,
        description: "15 PhotoPost",
        createdAt: new Date('2018-02-23T22:00:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErA8vVIbEC_iqldZLWHs4tpsYFvm56CD9lOW0J8WB0fv5BJOA",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 16,
        description: "16 PhotoPost",
        createdAt: new Date('2018-02-23T23:43:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24kd_2tEzjbb_GdPnMQKog7lMCxtYmmy7dxjjpDr6d2ZseK-Dig",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 17,
        description: "17 PhotoPost",
        createdAt: new Date('2018-02-23T23:25:00'),
        author: 'Kukel',
        photoLink: "https://img.purch.com/w/660/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3My80NzQvb3JpZ2luYWwvVHJpZmlkTTIwLTEzTGlnaHRzLVRha2FEU0EtbmV0LmpwZw==",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 18,
        description: "18 PhotoPost",
        createdAt: new Date('2018-02-23T22:20:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZQsdLrY0gp9N9JoGJlQ-Bo4AELr4TKcNZGY-DB756oozHCFL",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 19,
        description: "19 PhotoPost",
        createdAt: new Date('2016-02-23T23:40:00'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Z4ppaRTeFKKu85PGbzuCJCiyHkiaywt6I0WqyEaKN1SEXo101A",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
    {
        id: 20,
        description: "20 PhotoPost",
        createdAt: new Date('2018-02-23T23:30:30'),
        author: 'Kukel',
        photoLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gEePiq7cPe5O7MRS_apcEo6bheN2E1hv8f9D6H0VOzrUULcSBw",
        hashTags: ["Hash","Teg"],
        likes: ["Name1", "Name2"]
    },
];
photoPosts.sort(compareDates);

function compareDates(a, b) {
    return b.createdAt - a.createdAt;
}

let module = (function () {
    return {

        validatePhotoPost: function (photoPost) {
            if (typeof photoPost.description !== 'string' || photoPost.description.length > 200)
                return false;
            if (typeof photoPost.author !== 'string')
                return false;
            if (typeof photoPost.photoLink !== 'string')
                return false;
            else return true;
        },
        addPhotoPost: function (photoPost) {
            if (module.validatePhotoPost(photoPost)) {
                photoPost.id = maxid + 1;
                photoPost.createdAt = new Date();
                maxid++;
                photoPosts.push(photoPost);
                photoPosts.sort(compareDates);
                return true;
            }
            else return false;
        },

        getPhotoPost: function (myid) {
            for(var i = 0; i < photoPosts.length; i++){
                if (photoPosts[i].id === myid) {
                    return photoPosts[i];
                }
            }
            return false;
        },

        removePhotoPost: function (myid) {
            for(var i = 0; i < photoPosts.length; i++){
                if (photoPosts[i].id === myid) {
                photoPosts.splice(i,i);
                return true;
                }
            }
            return false;
        },

        editPhotoPost: function (myid, photoPost) {
             if (module.validatePhotoPost(photoPost)) {
             for(var i = 0; i < photoPosts.length; i++){
                if (photoPosts[i].id === myid) {
                if (photoPost.hasOwnProperty('description')) {
                    photoPosts[i].description = photoPost.description;
                }
                if (photoPost.hasOwnProperty('photoLink')) {
                    photoPosts[i].photoLink = photoPost.photoLink;
                }
                if (photoPost.hasOwnProperty('hashTags')) {
                    photoPosts[i].hashTags.push(photoPost.hashTags);
                }
                if (photoPost.hasOwnProperty('likes')) {
                    photoPosts[i].likes.push(photoPost.likes);
                }
                }
                return false;
            }
            return false;
        }
        }
    }
}());
    //object for adding from console
/*{
        id: '8',
        description: 'love his hat',
        createdAt: new Date('2018-02-13T23:00:00'),
        author: 'arinarudevich',
        photoLink: 'http://cmzone.vzbqbxhynotw9ion96xv.netdna-cdn.com/wp-content/uploads/2015/10/duckbootsmoonrisekingdom1.jpg',
        hashTags: ['hashtag2'],
        likes: ['arina', 'someguy']
    },*/