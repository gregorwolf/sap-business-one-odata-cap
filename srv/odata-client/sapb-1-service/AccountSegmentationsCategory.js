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
exports.AccountSegmentationsCategory = exports.AccountSegmentationsCategoryField = exports.createAccountSegmentationsCategory = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[AccountSegmentationsCategory.build]] instead.
 */
function createAccountSegmentationsCategory(json) {
    return AccountSegmentationsCategory.build(json);
}
exports.createAccountSegmentationsCategory = createAccountSegmentationsCategory;
/**
 * AccountSegmentationsCategoryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AccountSegmentationsCategoryField = /** @class */ (function (_super) {
    __extends(AccountSegmentationsCategoryField, _super);
    /**
     * Creates an instance of AccountSegmentationsCategoryField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AccountSegmentationsCategoryField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AccountSegmentationsCategory) || this;
        /**
         * Representation of the [[AccountSegmentationsCategory.segmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.segmentId = new core_1.ComplexTypeNumberPropertyField('SegmentID', _this, 'Edm.Int32');
        /**
         * Representation of the [[AccountSegmentationsCategory.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[AccountSegmentationsCategory.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[AccountSegmentationsCategory.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new core_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        return _this;
    }
    return AccountSegmentationsCategoryField;
}(core_1.ComplexTypeField));
exports.AccountSegmentationsCategoryField = AccountSegmentationsCategoryField;
var AccountSegmentationsCategory;
(function (AccountSegmentationsCategory) {
    /**
     * Metadata information on all properties of the `AccountSegmentationsCategory` complex type.
     */
    AccountSegmentationsCategory._propertyMetadata = [{
            originalName: 'SegmentID',
            name: 'segmentId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShortName',
            name: 'shortName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AccountSegmentationsCategory);
    }
    AccountSegmentationsCategory.build = build;
})(AccountSegmentationsCategory = exports.AccountSegmentationsCategory || (exports.AccountSegmentationsCategory = {}));
//# sourceMappingURL=AccountSegmentationsCategory.js.map