const dom = (function() {
    countPost = 0;
    return {
        like: function(someid) {
            document.getElementById(someid).lastChild.childNodes[0];
            //if(user !== null)
            {
                flag = 0;
                for (var i = 0; i < module.getPhotoPost(someid).likes.length; i++) {
                    if (module.getPhotoPost(someid).likes[i] === "dc") {
                        module.getPhotoPost(someid).likes.splice(i);
                        flag = 1;
                    }
                }
                if (flag === 0) {

                    module.getPhotoPost(someid).likes.push("dc");
                }
            }
        },
        deletePhotopost: function(someid) {
            let el = document.getElementById(someid);
            if (el) {
                post = module.getPhotoPost(countPost);

                let fphotopost = document.createElement('div');
                fphotopost.className = 'fphotopost';
                fphotopost.classList.add("post");
                fphotopost.id = post.id;
                let name = document.createElement('div');
                name.className = 'name';
                name.innerHTML = post.author;
                name.classList.add("hashtags");

                let date = document.createElement('div');
                date.className = 'date';
                date.innerHTML = post.createdAt;
                date.classList.add("hashtags");

                let image = document.createElement('img');
                image.className = 'image';
                image.src = post.photoLink;
                image.classList.add("image");

                let toolbar = document.createElement('div');
                toolbar.className = 'toolbar';

                let favorite = document.createElement('button');
                favorite.className = 'tool_button';
                favorite.setAttribute('data-action', 'like');
                favorite.classList.add("tool_button");
                favorite.innerHTML = '<i class="material-icons md-25">favorite</i>';
                //favorite.classList.add("material-icons md-25");

                let edit = document.createElement('button');
                edit.className = 'tool_button';
                edit.setAttribute('data-action', 'edit');
                edit.classList.add("tool_button");
                edit.innerHTML = '<i class="material-icons md-25">edit</i>';

                let del = document.createElement('button');
                del.className = 'tool_button';
                del.setAttribute('data-action', 'delete');
                del.classList.add("tool_button");
                del.innerHTML = '<i class="material-icons md-25">delete</i>';

                toolbar.appendChild(favorite);
                toolbar.appendChild(edit);
                toolbar.appendChild(del);

                fphotopost.appendChild(name);
                fphotopost.appendChild(date);
                fphotopost.appendChild(image);
                fphotopost.appendChild(toolbar);

                countPost = countPost + 1;
                let parent = el.parentElement;
                el.remove();
                //module.removePhotoPost(someid);
                parent.appendChild(fphotopost);
            }
        },
        createError: function() {
            let image = document.createElement('img');
            image.src = "Error.jpg";
            document.getElementsByTagName('main')[0].appendChild(image);
        },
        createShowButton: function() {
            let showButton = document.createElement('button');
            showButton.className = 'show_button';
            showButton.id = 'show';
            showButton.innerHTML = ' <i class="material-icons">&#xE5CF</i>show more';
            document.getElementsByTagName('main')[0].appendChild(showButton);

        },
        createAddButton: function() {
            let addButton = document.createElement('button');
            addButton.className = 'add_button';
            addButton.innerHTML = '&#10010 add photo post';
            document.getElementsByTagName('main')[0].insertBefore(addButton, document.getElementById('show'));
        },
        createFilter: function() {
            let searchBlock = document.createElement('form');
            searchBlock.className = "search_block";
            searchBlock.name = "search";
            document.getElementsByTagName('main')[0].appendChild(searchBlock);

            let nameSearch = document.createElement('input');
            nameSearch.className = "search";
            nameSearch.placeholder = " Search by name..";
            nameSearch.name = "nameFilter";
            document.getElementsByClassName('search_block')[0].appendChild(nameSearch);

            let dateSearch = document.createElement('input');
            dateSearch.className = "search";
            dateSearch.type = "date";
            dateSearch.placeholder = "DD/MM/YY";
            dateSearch.name = "dateFilter";
            document.getElementsByClassName('search_block')[0].appendChild(dateSearch);

        },

        editPhotopost: function(someid) {


        },


        createMain: function() {
            countPost = 0;
            dom.clearMain();
            dom.createAddButton();
            dom.createFilter();
            dom.create3PhotoPost();
            dom.create3PhotoPost();
            dom.create3PhotoPost();
            dom.createShowButton()
        },
        createButton: function() {
            let fav = document.createElement('button');
            fav.className = 'ret_button';
            fav.id = "ret_button";
            fav.classList.add("ret_button");
            fav.innerHTML = '<i class="material-icons">ret_button</i>';
            document.getElementsByTagName('main')[0].appendChild(fav);
        },

        clearMain: function() {
            let main = document.getElementsByTagName("main")[0];
            main.innerHTML = "";
            dom.currentPostAmount = 0;
        },
        create3PhotoPost: function() {
            post = module.getPhotoPost(countPost);
            post2 = module.getPhotoPost(countPost + 1);
            post1 = module.getPhotoPost(countPost + 2);
            if (module.validatePhotoPost(post) && module.validatePhotoPost(post1) && module.validatePhotoPost(post2)) {

                let allphotopost = document.createElement('div');
                allphotopost.className = 'allphotopost';
                allphotopost.classList.add("line");

                let fphotopost = document.createElement('div');
                fphotopost.className = 'fphotopost';
                fphotopost.classList.add("post");
                fphotopost.id = post.id;

                let sphotopost = document.createElement('div');
                sphotopost.className = 'sphotopost';
                sphotopost.classList.add("post");
                sphotopost.id = post1.id;

                let tphotopost = document.createElement('div');
                tphotopost.className = 'tphotopost';
                tphotopost.classList.add("post");
                tphotopost.id = post2.id;

                let name = document.createElement('div');
                name.className = 'name';
                name.innerHTML = post.author;
                name.classList.add("hashtags");

                let date = document.createElement('div');
                date.className = 'date';
                date.innerHTML = post.createdAt;
                date.classList.add("hashtags");

                let image = document.createElement('img');
                image.className = 'image';
                image.src = post.photoLink;
                image.classList.add("image");

                let toolbar = document.createElement('div');
                toolbar.className = 'toolbar';

                let favorite = document.createElement('button');
                favorite.className = 'tool_button';
                favorite.setAttribute('data-action', 'like');
                favorite.classList.add("tool_button");
                favorite.innerHTML = '<i class="material-icons md-25">favorite</i>';
                //favorite.classList.add("material-icons md-25");

                let edit = document.createElement('button');
                edit.className = 'tool_button';
                edit.setAttribute('data-action', 'edit');
                edit.classList.add("tool_button");
                edit.innerHTML = '<i class="material-icons md-25">edit</i>';

                let del = document.createElement('button');
                del.className = 'tool_button';
                del.setAttribute('data-action', 'delete');
                del.classList.add("tool_button");
                del.innerHTML = '<i class="material-icons md-25">delete</i>';

                toolbar.appendChild(favorite);
                toolbar.appendChild(edit);
                toolbar.appendChild(del);

                let name1 = document.createElement('div');
                name1.className = 'name';
                name1.innerHTML = post1.author;
                name1.classList.add("hashtags");

                let date1 = document.createElement('div');
                date1.className = 'date';
                date1.innerHTML = post1.createdAt;
                date1.classList.add("hashtags");

                let image1 = document.createElement('img');
                image1.className = 'image';
                image1.src = post1.photoLink;
                image1.classList.add("image");

                let toolbar1 = document.createElement('div');
                toolbar1.className = 'toolbar';

                let favorite1 = document.createElement('button');
                favorite1.className = 'tool_button';
                favorite1.setAttribute('data-action', 'like');
                favorite1.classList.add("tool_button");
                favorite1.innerHTML = '<i class="material-icons md-25">favorite</i>';
                //favorite.classList.add("material-icons md-25");

                let edit1 = document.createElement('button');
                edit1.className = 'tool_button';
                edit1.setAttribute('data-action', 'edit1');
                edit1.classList.add("tool_button");
                edit1.innerHTML = '<i class="material-icons md-25">edit</i>';

                let del1 = document.createElement('button');
                del1.className = 'tool_button';
                del1.setAttribute('data-action', 'delete');
                del1.classList.add("tool_button");
                del1.innerHTML = '<i class="material-icons md-25">delete</i>';

                toolbar1.appendChild(favorite1);
                toolbar1.appendChild(edit1);
                toolbar1.appendChild(del1);

                let name2 = document.createElement('div');
                name2.className = 'name';
                name2.innerHTML = post2.author;
                name2.classList.add("hashtags");

                let date2 = document.createElement('div');
                date2.className = 'date';
                date2.innerHTML = post2.createdAt;
                date2.classList.add("hashtags");

                let image2 = document.createElement('img');
                image2.className = 'image';
                image2.src = post2.photoLink;
                image2.classList.add("image");

                let toolbar2 = document.createElement('div');
                toolbar2.className = 'toolbar';

                let favorite2 = document.createElement('button');
                favorite2.className = 'tool_button';
                favorite2.setAttribute('data-action', 'like');
                favorite2.classList.add("tool_button");
                favorite2.innerHTML = '<i class="material-icons md-25">favorite</i>';
                //favorite.classList.add("material-icons md-25");

                let edit2 = document.createElement('button');
                edit2.className = 'tool_button';
                edit2.setAttribute('data-action', 'edit2');
                edit2.classList.add("tool_button");
                edit2.innerHTML = '<i class="material-icons md-25">edit</i>';

                let del2 = document.createElement('button');
                del2.className = 'tool_button';
                del2.setAttribute('data-action', 'delete');
                del2.classList.add("tool_button");
                del2.innerHTML = '<i class="material-icons md-25">delete</i>';

                toolbar2.appendChild(favorite2);
                toolbar2.appendChild(edit2);
                toolbar2.appendChild(del2);

                fphotopost.appendChild(name);
                fphotopost.appendChild(date);
                fphotopost.appendChild(image);
                fphotopost.appendChild(toolbar);

                sphotopost.appendChild(name1);
                sphotopost.appendChild(date1);
                sphotopost.appendChild(image1);
                sphotopost.appendChild(toolbar1);

                tphotopost.appendChild(name2);
                tphotopost.appendChild(date2);
                tphotopost.appendChild(image2);
                tphotopost.appendChild(toolbar2);

                allphotopost.appendChild(fphotopost);
                allphotopost.appendChild(sphotopost);
                allphotopost.appendChild(tphotopost);


                document.getElementsByTagName('main')[0].appendChild(allphotopost);

                countPost = countPost + 3;
            } else {
                console.log('Invalid arguments.');
            }
        }
    }
})();
dom.createMain();