## Self-Monitored Blood Glucose (smbg)

**NB:** All fields are *required* unless otherwise noted.


> Jump to example JSON:

>  - [client example](#example-client)
>  - [ingestion example](#example-ingestion)
>  - [storage example](#example-storage)


### type

[ingestion, storage, client] The string `smbg`.

	QUICK SUMMARY
	Required:
		jellyfish: yes
		platform: yes

<!-- start type -->

This is the Tidepool data type for traditional fingerstick blood glucose meter data. `smbg` is an abbreviation of 'self-monitored blood glucose' and contrasts with `cbg`, abbreviating 'continuous blood glucose'. [`cbg`](cbg.md) is the Tidepool data type for continuous glucose monitor (CGM) sensor data.

<!-- end type -->

* * * * *

### subType

> This field is **optional**.

[ingestion, storage, client] String value encoding additional information about the source of the blood glucose value.

	QUICK SUMMARY
	Required:
		jellyfish: no (optional)
		platform: no (optional)
	Range: Must be one of:
		`manual`
		`linked`

<!-- start subType -->

`subType` appears on blood glucose values that are *not* being read directly from a traditional fingerstick blood glucose meter, but rather from another data source such as an insulin pump.

The value `manual` indicates that the blood glucose value was manually entered by a user (and is thus, of course, subject to human error).

The value `linked` indicates that the blood glucose value was transferred from a blood glucose meter to the pump directly via some sort of data transfer or pairing mechanism. If the blood glucose meter in question is also supported by the Tidepool uploader, duplicate records may exist: both read directly from the meter and pulled in as `subType: 'linked'` records from the insulin pump.

<!-- end subType -->

* * * * *

### units

[ingestion] One of two string values: `mg/dL` or `mmol/L`.

[storage, client] The string `mmol/L`.

See [units](../units.md) for further explanation of blood glucose units.

	QUICK SUMMARY
	Required:
		jellyfish: yes
		platform: yes
	Range: Must be one of:
		`mg/dL`
		`mmol/L`

<!-- start units -->

<!-- end units -->

* * * * *

### value

[ingestion] Blood glucose value in either mg/dL (integer) or mmol/L (float), with appropriately matching `units` field.

[storage, client] Blood glucose value in mmol/L (float, potentially unrounded), with appropriately matching `units` field.

	QUICK SUMMARY
	Required:
		jellyfish: yes
		platform: yes
	Numerical type:
		mg/dL: Integer value representing a `mg/dL` value.
		mmol/L: Floating point value representing a `mmol/L` value.
	Range:
		mg/dL:
			min: 0
			max: 1000
		mmol/L:
			min: 0.0
			max: 55.0



<!-- start value -->

<!-- end value -->

* * * * *

### clockDriftOffset

See [common fields](../common.md).

<!-- start clockDriftOffset -->
<!-- TODO -->
<!-- end clockDriftOffset -->

* * * * *

### conversionOffset

See [common fields](../common.md).

<!-- start conversionOffset -->
<!-- TODO -->
<!-- end conversionOffset -->

* * * * *

### deviceId

See [common fields](../common.md).

<!-- start deviceId -->
<!-- TODO -->
<!-- end deviceId -->

* * * * *

### deviceTime

See [common fields](../common.md).

<!-- start deviceTime -->
<!-- TODO -->
<!-- end deviceTime -->

* * * * *

### guid

See [common fields](../common.md).

<!-- start guid -->
<!-- TODO -->
<!-- end guid -->

* * * * *

### time

See [common fields](../common.md).

<!-- start time -->
<!-- TODO -->
<!-- end time -->

* * * * *

### timezoneOffset

See [common fields](../common.md).

<!-- start timezoneOffset -->
<!-- TODO -->
<!-- end timezoneOffset -->

* * * * *

### uploadId

See [common fields](../common.md).

<!-- start uploadId -->
<!-- TODO -->
<!-- end uploadId -->

* * * * *

### _active

See [common fields](../common.md).

<!-- start _active -->
<!-- TODO -->
<!-- end _active -->

* * * * *

### _groupId

See [common fields](../common.md).

<!-- start _groupId -->
<!-- TODO -->
<!-- end _groupId -->

* * * * *

### _schemaVersion

See [common fields](../common.md).

<!-- start _schemaVersion -->
<!-- TODO -->
<!-- end _schemaVersion -->

* * * * *

### _version

See [common fields](../common.md).

<!-- start _version -->
<!-- TODO -->
<!-- end _version -->

* * * * *

### createdTime

See [common fields](../common.md).

<!-- start createdTime -->
<!-- TODO -->
<!-- end createdTime -->

* * * * *

### id

See [common fields](../common.md).

<!-- start id -->
<!-- TODO -->
<!-- end id -->

* * * * *

### example (client)

```json
{
	"type": "smbg",
	"subType": "linked",
	"units": "mmol/L",
	"value": 11.212510941911978,
	"clockDriftOffset": 0,
	"conversionOffset": 0,
	"deviceId": "DevId0987654321",
	"deviceTime": "2016-05-04T01:18:06",
	"guid": "dd6b243c-7bf0-4b98-a4d7-542ac2d81b89",
	"id": "3b1ab0bb540442f68c56f071f7cb3547",
	"time": "2016-05-04T08:18:06.425Z",
	"timezoneOffset": -420,
	"uploadId": "SampleUploadId"
}
```

### example (ingestion)

```json
{
	"type": "smbg",
	"subType": "linked",
	"units": "mg/dL",
	"value": 188,
	"clockDriftOffset": 0,
	"conversionOffset": 0,
	"deviceId": "DevId0987654321",
	"deviceTime": "2016-05-04T01:18:06",
	"guid": "f2d45d3f-1a32-4979-bc41-db7bd15bbb9e",
	"time": "2016-05-04T08:18:06.426Z",
	"timezoneOffset": -420,
	"uploadId": "SampleUploadId"
}
```

### example (storage)

```json
{
	"type": "smbg",
	"subType": "manual",
	"units": "mmol/L",
	"value": 17.26282625215161,
	"_active": true,
	"_groupId": "abcdef",
	"_schemaVersion": 0,
	"_version": 0,
	"clockDriftOffset": 0,
	"conversionOffset": 0,
	"createdTime": "2016-05-04T08:18:11.426Z",
	"deviceId": "DevId0987654321",
	"deviceTime": "2016-05-04T01:18:06",
	"guid": "b6c63b94-d2a1-40d6-9a25-dbda175f1aef",
	"id": "7a0ddcbe2e3a4b1e856ddca0132fbfc5",
	"time": "2016-05-04T08:18:06.426Z",
	"timezoneOffset": -420,
	"uploadId": "SampleUploadId"
}
```