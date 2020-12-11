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
exports.TargetGroupsDetail = exports.TargetGroupsDetailField = exports.createTargetGroupsDetail = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TargetGroupsDetail.build]] instead.
 */
function createTargetGroupsDetail(json) {
    return TargetGroupsDetail.build(json);
}
exports.createTargetGroupsDetail = createTargetGroupsDetail;
/**
 * TargetGroupsDetailField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TargetGroupsDetailField = /** @class */ (function (_super) {
    __extends(TargetGroupsDetailField, _super);
    /**
     * Creates an instance of TargetGroupsDetailField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TargetGroupsDetailField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TargetGroupsDetail) || this;
        /**
         * Representation of the [[TargetGroupsDetail.targetGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetGroupCode = new core_1.ComplexTypeStringPropertyField('TargetGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.businessPartnerCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPartnerCode = new core_1.ComplexTypeStringPropertyField('BusinessPartnerCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.businessPartnerName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPartnerName = new core_1.ComplexTypeStringPropertyField('BusinessPartnerName', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.groupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupCode = new core_1.ComplexTypeStringPropertyField('GroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.industry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.industry = new core_1.ComplexTypeStringPropertyField('Industry', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.activeStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activeStatus = new core_1.ComplexTypeEnumPropertyField('ActiveStatus', _this);
        /**
         * Representation of the [[TargetGroupsDetail.contactPerson]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactPerson = new core_1.ComplexTypeStringPropertyField('ContactPerson', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.title]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.title = new core_1.ComplexTypeStringPropertyField('Title', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.position]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.position = new core_1.ComplexTypeStringPropertyField('Position', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.eMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eMail = new core_1.ComplexTypeStringPropertyField('E_Mail', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.telephone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.telephone = new core_1.ComplexTypeStringPropertyField('Telephone', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.mobilePhone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mobilePhone = new core_1.ComplexTypeStringPropertyField('MobilePhone', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.fax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fax = new core_1.ComplexTypeStringPropertyField('Fax', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new core_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new core_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new core_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new core_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new core_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new core_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new core_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[TargetGroupsDetail.building]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.building = new core_1.ComplexTypeStringPropertyField('Building', _this, 'Edm.String');
        return _this;
    }
    return TargetGroupsDetailField;
}(core_1.ComplexTypeField));
exports.TargetGroupsDetailField = TargetGroupsDetailField;
var TargetGroupsDetail;
(function (TargetGroupsDetail) {
    /**
     * Metadata information on all properties of the `TargetGroupsDetail` complex type.
     */
    TargetGroupsDetail._propertyMetadata = [{
            originalName: 'TargetGroupCode',
            name: 'targetGroupCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BusinessPartnerCode',
            name: 'businessPartnerCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BusinessPartnerName',
            name: 'businessPartnerName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GroupCode',
            name: 'groupCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Industry',
            name: 'industry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ActiveStatus',
            name: 'activeStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ContactPerson',
            name: 'contactPerson',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Title',
            name: 'title',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Position',
            name: 'position',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'E_Mail',
            name: 'eMail',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Telephone',
            name: 'telephone',
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
            originalName: 'Address',
            name: 'address',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Street',
            name: 'street',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Block',
            name: 'block',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'City',
            name: 'city',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ZipCode',
            name: 'zipCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'County',
            name: 'county',
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
            originalName: 'Building',
            name: 'building',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TargetGroupsDetail);
    }
    TargetGroupsDetail.build = build;
})(TargetGroupsDetail = exports.TargetGroupsDetail || (exports.TargetGroupsDetail = {}));
//# sourceMappingURL=TargetGroupsDetail.js.map