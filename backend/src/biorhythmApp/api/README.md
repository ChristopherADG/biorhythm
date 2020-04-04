# API

`PREFIX = /api/`

## Calculate Biorhythm

**REQUEST:** GET

**ROUTE:** `/api/biocalc`

**PRECONDITIONS:** User must be logged in

#### URL PARAMS:

`target_date`:
- Type: date
- Format: YYY-MM-DD
- Description: Set desired date to calculate biorhythm
- NOTES: Empty field = today
- Optional parameter

`range`:
- Type: int
- Description: Get the biorhythm for the next _x_ days
- Return Type: ( List | Single Object )
- NOTES: Empty returns a single object.
- Optional parameter

`limit`: 
- Type: int
- Description: Truncate the number to _x_ decimals
- NOTES: Empty leaves the limit to 15 decimals
- Optional parameter

#### USAGE:

> `localhost:8000/api/biocalc`

Returns a single object: today's biorhythm

RETURNS:

```
{
    "phy": 0.398401089846351,
    "emo": 0.623489801858581,
    "int": 0.755749574354349,
    "days_since": 7899,
    "init_date": 903484800000,
    "init_date_str": "1998/08/19",
    "target_date": 1586035504988,
    "target_date_str": "2020/04/04"
}
```

> `localhost:8000/api/biocalc?target_date=2020-04-02&range=9&limit=4`

Returns a list of biorhythms from 2020-04-02 to the next 9 days.

RETURNS:

```
[
    {
        "phy": 0.817,
        "emo": 0.223,
        "int": 0.945,
        "days_since": 7897,
        "init_date": 903484800000,
        "init_date_str": "1998/08/19",
        "target_date": 1585785600000,
        "target_date_str": "2020/04/02"
    },
    {
        "phy": 0.631,
        "emo": 0.434,
        "int": 0.866,
        "days_since": 7898,
        "init_date": 903484800000,
        "init_date_str": "1998/08/19",
        "target_date": 1585872000000,
        "target_date_str": "2020/04/03"
    },
    {
        "phy": 0.398,
        "emo": 0.623,
        "int": 0.756,
        "days_since": 7899,
        "init_date": 903484800000,
        "init_date_str": "1998/08/19",
        "target_date": 1585958400000,
        "target_date_str": "2020/04/04"
    }
]
```

**NOT LOGGED IN**
> `localhost:8000/api/biocalc`

Returns error message
> Status: HTTP_401_UNAUTHORIZED

RETURNS:

```
{
    "error": "Can't find user or you are not logged in"
}
```
