"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCallScheduling = exports.ServiceCallSchedulingField = exports.createServiceCallScheduling = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallScheduling.build]] instead.
 */
function createServiceCallScheduling(json) {
    return ServiceCallScheduling.build(json);
}
exports.createServiceCallScheduling = createServiceCallScheduling;
/**
 * ServiceCallSchedulingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallSchedulingField = /** @class */ (function (_super) {
    __extends(ServiceCallSchedulingField, _super);
    /**
     * Creates an instance of ServiceCallSchedulingField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ServiceCallSchedulingField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ServiceCallScheduling) || this;
        /**
         * Representation of the [[ServiceCallScheduling.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallScheduling.technician]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.technician = new core_1.ComplexTypeNumberPropertyField('Technician', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallScheduling.handledBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.handledBy = new core_1.ComplexTypeNumberPropertyField('HandledBy', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallScheduling.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.startTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startTime = new core_1.ComplexTypeTimePropertyField('StartTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ServiceCallScheduling.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new core_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.endTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endTime = new core_1.ComplexTypeTimePropertyField('EndTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ServiceCallScheduling.duration]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.duration = new core_1.ComplexTypeNumberPropertyField('Duration', _this, 'Edm.Double');
        /**
         * Representation of the [[ServiceCallScheduling.actualDuration]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualDuration = new core_1.ComplexTypeNumberPropertyField('ActualDuration', _this, 'Edm.Double');
        /**
         * Representation of the [[ServiceCallScheduling.durationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.durationType = new core_1.ComplexTypeEnumPropertyField('DurationType', _this);
        /**
         * Representation of the [[ServiceCallScheduling.reminder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminder = new core_1.ComplexTypeEnumPropertyField('Reminder', _this);
        /**
         * Representation of the [[ServiceCallScheduling.reminderPeriod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminderPeriod = new core_1.ComplexTypeNumberPropertyField('ReminderPeriod', _this, 'Edm.Double');
        /**
         * Representation of the [[ServiceCallScheduling.reminderType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminderType = new core_1.ComplexTypeEnumPropertyField('ReminderType', _this);
        /**
         * Representation of the [[ServiceCallScheduling.reminderSent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminderSent = new core_1.ComplexTypeEnumPropertyField('ReminderSent', _this);
        /**
         * Representation of the [[ServiceCallScheduling.reminderDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminderDate = new core_1.ComplexTypeDatePropertyField('ReminderDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.reminderTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminderTime = new core_1.ComplexTypeTimePropertyField('ReminderTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ServiceCallScheduling.displayInCalendar]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.displayInCalendar = new core_1.ComplexTypeEnumPropertyField('DisplayInCalendar', _this);
        /**
         * Representation of the [[ServiceCallScheduling.isUnscheduled]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isUnscheduled = new core_1.ComplexTypeEnumPropertyField('IsUnscheduled', _this);
        /**
         * Representation of the [[ServiceCallScheduling.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeNumberPropertyField('Location', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallScheduling.addressName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName = new core_1.ComplexTypeStringPropertyField('AddressName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.addressText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressText = new core_1.ComplexTypeStringPropertyField('AddressText', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new core_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new core_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.room]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.room = new core_1.ComplexTypeStringPropertyField('Room', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new core_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.address2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address2 = new core_1.ComplexTypeStringPropertyField('Address2', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.address3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address3 = new core_1.ComplexTypeStringPropertyField('Address3', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.addressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressType = new core_1.ComplexTypeStringPropertyField('AddressType', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.streetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetNo = new core_1.ComplexTypeStringPropertyField('StreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new core_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new core_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new core_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.taxOffice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxOffice = new core_1.ComplexTypeStringPropertyField('TaxOffice', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.globalLocNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocNum = new core_1.ComplexTypeStringPropertyField('GlobalLocNum', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.isClosed]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isClosed = new core_1.ComplexTypeEnumPropertyField('IsClosed', _this);
        /**
         * Representation of the [[ServiceCallScheduling.remark]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remark = new core_1.ComplexTypeStringPropertyField('Remark', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.addressTypeBs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressTypeBs = new core_1.ComplexTypeEnumPropertyField('AddressTypeBS', _this);
        /**
         * Representation of the [[ServiceCallScheduling.signatureName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.signatureName = new core_1.ComplexTypeStringPropertyField('SignatureName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.salesOrders]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesOrders = new core_1.ComplexTypeStringPropertyField('SalesOrders', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.checkInDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInDate = new core_1.ComplexTypeDatePropertyField('CheckInDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.checkInTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInTime = new core_1.ComplexTypeTimePropertyField('CheckInTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ServiceCallScheduling.checkInLocation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInLocation = new core_1.ComplexTypeStringPropertyField('CheckInLocation', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.checkInLatitude]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInLatitude = new core_1.ComplexTypeStringPropertyField('CheckInLatitude', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.checkInLongitude]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInLongitude = new core_1.ComplexTypeStringPropertyField('CheckInLongitude', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.checkOutDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkOutDate = new core_1.ComplexTypeDatePropertyField('CheckOutDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.checkOutTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkOutTime = new core_1.ComplexTypeTimePropertyField('CheckOutTime', _this, 'Edm.TimeOfDay');
        return _this;
    }
    return ServiceCallSchedulingField;
}(core_1.ComplexTypeField));
exports.ServiceCallSchedulingField = ServiceCallSchedulingField;
var ServiceCallScheduling;
(function (ServiceCallScheduling) {
    /**
     * Metadata information on all properties of the `ServiceCallScheduling` complex type.
     */
    ServiceCallScheduling._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Technician',
            name: 'technician',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'HandledBy',
            name: 'handledBy',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'StartTime',
            name: 'startTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'EndDate',
            name: 'endDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'EndTime',
            name: 'endTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'Duration',
            name: 'duration',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ActualDuration',
            name: 'actualDuration',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DurationType',
            name: 'durationType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Reminder',
            name: 'reminder',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReminderPeriod',
            name: 'reminderPeriod',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ReminderType',
            name: 'reminderType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReminderSent',
            name: 'reminderSent',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReminderDate',
            name: 'reminderDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReminderTime',
            name: 'reminderTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'DisplayInCalendar',
            name: 'displayInCalendar',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsUnscheduled',
            name: 'isUnscheduled',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Location',
            name: 'location',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AddressName',
            name: 'addressName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AddressText',
            name: 'addressText',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Street',
            name: 'street',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'City',
            name: 'city',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Room',
            name: 'room',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Country',
            name: 'country',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Address2',
            name: 'address2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Address3',
            name: 'address3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AddressType',
            name: 'addressType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StreetNo',
            name: 'streetNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ZipCode',
            name: 'zipCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Block',
            name: 'block',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'County',
            name: 'county',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxOffice',
            name: 'taxOffice',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GlobalLocNum',
            name: 'globalLocNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IsClosed',
            name: 'isClosed',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Remark',
            name: 'remark',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AddressTypeBS',
            name: 'addressTypeBs',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SignatureName',
            name: 'signatureName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesOrders',
            name: 'salesOrders',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckInDate',
            name: 'checkInDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CheckInTime',
            name: 'checkInTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'CheckInLocation',
            name: 'checkInLocation',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckInLatitude',
            name: 'checkInLatitude',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckInLongitude',
            name: 'checkInLongitude',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckOutDate',
            name: 'checkOutDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CheckOutTime',
            name: 'checkOutTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ServiceCallScheduling);
    }
    ServiceCallScheduling.build = build;
})(ServiceCallScheduling = exports.ServiceCallScheduling || (exports.ServiceCallScheduling = {}));
//# sourceMappingURL=ServiceCallScheduling.js.map