"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ContactEmployeeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ContactEmployee.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new v4_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new v4_1.ComplexTypeStringPropertyField('Position', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new v4_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.phone1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phone1 = new v4_1.ComplexTypeStringPropertyField('Phone1', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.phone2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phone2 = new v4_1.ComplexTypeStringPropertyField('Phone2', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.mobilePhone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mobilePhone = new v4_1.ComplexTypeStringPropertyField('MobilePhone', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.fax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fax = new v4_1.ComplexTypeStringPropertyField('Fax', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.eMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eMail = new v4_1.ComplexTypeStringPropertyField('E_Mail', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.pager]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pager = new v4_1.ComplexTypeStringPropertyField('Pager', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.remarks1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks1 = new v4_1.ComplexTypeStringPropertyField('Remarks1', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.remarks2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks2 = new v4_1.ComplexTypeStringPropertyField('Remarks2', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.password]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.password = new v4_1.ComplexTypeStringPropertyField('Password', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.internalCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalCode = new v4_1.ComplexTypeNumberPropertyField('InternalCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ContactEmployee.placeOfBirth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.placeOfBirth = new v4_1.ComplexTypeStringPropertyField('PlaceOfBirth', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.dateOfBirth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateOfBirth = new v4_1.ComplexTypeDatePropertyField('DateOfBirth', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ContactEmployee.profession]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profession = new v4_1.ComplexTypeStringPropertyField('Profession', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.title]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.title = new v4_1.ComplexTypeStringPropertyField('Title', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.cityOfBirth]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cityOfBirth = new v4_1.ComplexTypeStringPropertyField('CityOfBirth', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.firstName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstName = new v4_1.ComplexTypeStringPropertyField('FirstName', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.middleName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.middleName = new v4_1.ComplexTypeStringPropertyField('MiddleName', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.lastName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastName = new v4_1.ComplexTypeStringPropertyField('LastName', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.emailGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.emailGroupCode = new v4_1.ComplexTypeStringPropertyField('EmailGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[ContactEmployee.contactEmployeeBlockSendingMarketingContents]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactEmployeeBlockSendingMarketingContents = new ContactEmployeeBlockSendingMarketingContent_1.ContactEmployeeBlockSendingMarketingContentField('ContactEmployeeBlockSendingMarketingContents', _this);
        return _this;
    }
    return ContactEmployeeField;
}(v4_1.ComplexTypeField));
exports.ContactEmployeeField = ContactEmployeeField;
var ContactEmployee;
(function (ContactEmployee) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CardCode: function (cardCode) { return ({ cardCode: v4_1.edmToTs(cardCode, 'Edm.String') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            Position: function (position) { return ({ position: v4_1.edmToTs(position, 'Edm.String') }); },
            Address: function (address) { return ({ address: v4_1.edmToTs(address, 'Edm.String') }); },
            Phone1: function (phone1) { return ({ phone1: v4_1.edmToTs(phone1, 'Edm.String') }); },
            Phone2: function (phone2) { return ({ phone2: v4_1.edmToTs(phone2, 'Edm.String') }); },
            MobilePhone: function (mobilePhone) { return ({ mobilePhone: v4_1.edmToTs(mobilePhone, 'Edm.String') }); },
            Fax: function (fax) { return ({ fax: v4_1.edmToTs(fax, 'Edm.String') }); },
            E_Mail: function (eMail) { return ({ eMail: v4_1.edmToTs(eMail, 'Edm.String') }); },
            Pager: function (pager) { return ({ pager: v4_1.edmToTs(pager, 'Edm.String') }); },
            Remarks1: function (remarks1) { return ({ remarks1: v4_1.edmToTs(remarks1, 'Edm.String') }); },
            Remarks2: function (remarks2) { return ({ remarks2: v4_1.edmToTs(remarks2, 'Edm.String') }); },
            Password: function (password) { return ({ password: v4_1.edmToTs(password, 'Edm.String') }); },
            InternalCode: function (internalCode) { return ({ internalCode: v4_1.edmToTs(internalCode, 'Edm.Int32') }); },
            PlaceOfBirth: function (placeOfBirth) { return ({ placeOfBirth: v4_1.edmToTs(placeOfBirth, 'Edm.String') }); },
            DateOfBirth: function (dateOfBirth) { return ({ dateOfBirth: v4_1.edmToTs(dateOfBirth, 'Edm.DateTimeOffset') }); },
            Profession: function (profession) { return ({ profession: v4_1.edmToTs(profession, 'Edm.String') }); },
            Title: function (title) { return ({ title: v4_1.edmToTs(title, 'Edm.String') }); },
            CityOfBirth: function (cityOfBirth) { return ({ cityOfBirth: v4_1.edmToTs(cityOfBirth, 'Edm.String') }); },
            FirstName: function (firstName) { return ({ firstName: v4_1.edmToTs(firstName, 'Edm.String') }); },
            MiddleName: function (middleName) { return ({ middleName: v4_1.edmToTs(middleName, 'Edm.String') }); },
            LastName: function (lastName) { return ({ lastName: v4_1.edmToTs(lastName, 'Edm.String') }); },
            EmailGroupCode: function (emailGroupCode) { return ({ emailGroupCode: v4_1.edmToTs(emailGroupCode, 'Edm.String') }); },
            ContactEmployeeBlockSendingMarketingContents: function (contactEmployeeBlockSendingMarketingContents) { return ({ contactEmployeeBlockSendingMarketingContents: ContactEmployeeBlockSendingMarketingContent_1.ContactEmployeeBlockSendingMarketingContent.build(contactEmployeeBlockSendingMarketingContents) }); }
        });
    }
    ContactEmployee.build = build;
})(ContactEmployee = exports.ContactEmployee || (exports.ContactEmployee = {}));
//# sourceMappingURL=ContactEmployee.js.map