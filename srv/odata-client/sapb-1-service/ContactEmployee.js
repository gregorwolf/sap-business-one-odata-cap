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
exports.ContactEmployee = exports.ContactEmployeeField = exports.createContactEmployee = void 0;
var ContactEmployeeBlockSendingMarketingContent_1 = require("./ContactEmployeeBlockSendingMarketingContent");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ContactEmployee.build]] instead.
 */
function createContactEmployee(json) {
    return ContactEmployee.build(json);
}
exports.createContactEmployee = createContactEmployee;
/**
 * ContactEmployeeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ContactEmployeeField = /** @class */ (function (_super) {
    __extends(ContactEmployeeField, _super);
    /**
     * Creates an instance of ContactEmployeeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ContactEmployeeField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ContactEmployee) || this;
        /**
         * Representation of the [[ContactEmployee.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new core_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new core_1.ComplexTypeStringPropertyField('Position', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new core_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.phone1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phone1 = new core_1.ComplexTypeStringPropertyField('Phone1', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.phone2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phone2 = new core_1.ComplexTypeStringPropertyField('Phone2', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.mobilePhone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mobilePhone = new core_1.ComplexTypeStringPropertyField('MobilePhone', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.fax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fax = new core_1.ComplexTypeStringPropertyField('Fax', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.eMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eMail = new core_1.ComplexTypeStringPropertyField('E_Mail', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.pager]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pager = new core_1.ComplexTypeStringPropertyField('Pager', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.remarks1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks1 = new core_1.ComplexTypeStringPropertyField('Remarks1', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.remarks2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks2 = new core_1.ComplexTypeStringPropertyField('Remarks2', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.password]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.password = new core_1.ComplexTypeStringPropertyField('Password', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.internalCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalCode = new core_1.ComplexTypeNumberPropertyField('InternalCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ContactEmployee.placeOfBirth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.placeOfBirth = new core_1.ComplexTypeStringPropertyField('PlaceOfBirth', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.dateOfBirth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfBirth = new core_1.ComplexTypeDatePropertyField('DateOfBirth', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ContactEmployee.gender]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gender = new core_1.ComplexTypeEnumPropertyField('Gender', _this);
        /**
         * Representation of the [[ContactEmployee.profession]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profession = new core_1.ComplexTypeStringPropertyField('Profession', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.title]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.title = new core_1.ComplexTypeStringPropertyField('Title', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.cityOfBirth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cityOfBirth = new core_1.ComplexTypeStringPropertyField('CityOfBirth', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.active]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.active = new core_1.ComplexTypeEnumPropertyField('Active', _this);
        /**
         * Representation of the [[ContactEmployee.firstName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstName = new core_1.ComplexTypeStringPropertyField('FirstName', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.middleName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.middleName = new core_1.ComplexTypeStringPropertyField('MiddleName', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.lastName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastName = new core_1.ComplexTypeStringPropertyField('LastName', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.emailGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.emailGroupCode = new core_1.ComplexTypeStringPropertyField('EmailGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.blockSendingMarketingContent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockSendingMarketingContent = new core_1.ComplexTypeEnumPropertyField('BlockSendingMarketingContent', _this);
        /**
         * Representation of the [[ContactEmployee.contactEmployeeBlockSendingMarketingContents]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactEmployeeBlockSendingMarketingContents = new core_1.CollectionField('ContactEmployeeBlockSendingMarketingContents', _this, ContactEmployeeBlockSendingMarketingContent_1.ContactEmployeeBlockSendingMarketingContent);
        return _this;
    }
    return ContactEmployeeField;
}(core_1.ComplexTypeField));
exports.ContactEmployeeField = ContactEmployeeField;
var ContactEmployee;
(function (ContactEmployee) {
    /**
     * Metadata information on all properties of the `ContactEmployee` complex type.
     */
    ContactEmployee._propertyMetadata = [{
            originalName: 'CardCode',
            name: 'cardCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Position',
            name: 'position',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Address',
            name: 'address',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Phone1',
            name: 'phone1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Phone2',
            name: 'phone2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MobilePhone',
            name: 'mobilePhone',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Fax',
            name: 'fax',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'E_Mail',
            name: 'eMail',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Pager',
            name: 'pager',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks1',
            name: 'remarks1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks2',
            name: 'remarks2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Password',
            name: 'password',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InternalCode',
            name: 'internalCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PlaceOfBirth',
            name: 'placeOfBirth',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DateOfBirth',
            name: 'dateOfBirth',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Gender',
            name: 'gender',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Profession',
            name: 'profession',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Title',
            name: 'title',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CityOfBirth',
            name: 'cityOfBirth',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Active',
            name: 'active',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FirstName',
            name: 'firstName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MiddleName',
            name: 'middleName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LastName',
            name: 'lastName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EmailGroupCode',
            name: 'emailGroupCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BlockSendingMarketingContent',
            name: 'blockSendingMarketingContent',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ContactEmployeeBlockSendingMarketingContents',
            name: 'contactEmployeeBlockSendingMarketingContents',
            type: ContactEmployeeBlockSendingMarketingContent_1.ContactEmployeeBlockSendingMarketingContent,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ContactEmployee);
    }
    ContactEmployee.build = build;
})(ContactEmployee = exports.ContactEmployee || (exports.ContactEmployee = {}));
//# sourceMappingURL=ContactEmployee.js.map