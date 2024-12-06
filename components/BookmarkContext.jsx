import React, {createContext, useState} from 'react';

export const BookmarkContext = createContext();

export function BookmarkProvider({children}) {
    const [savedBookmarks, setSavedBookmarks] = useState({});

    const toggleBookmark = (id) => {
        setSavedBookmarks(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <BookmarkContext.Provider value={{savedBookmarks, toggleBookmark}}>
            {children}
        </BookmarkContext.Provider>
    );
}