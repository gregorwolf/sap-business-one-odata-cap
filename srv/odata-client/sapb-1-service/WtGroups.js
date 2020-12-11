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
exports.WtGroups = exports.WtGroupsField = exports.createWtGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DocsInWtGroups_1 = require("./DocsInWtGroups");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WtGroups.build]] instead.
 */
function createWtGroups(json) {
    return WtGroups.build(json);
}
exports.createWtGroups = createWtGroups;
/**
 * WtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtGroupsField = /** @class */ (function (_super) {
    __extends(WtGroupsField, _super);
    /**
     * Creates an instance of WtGroupsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WtGroupsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WtGroups) || this;
        /**
         * Representation of the [[WtGroups.wtAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAbsEntry = new core_1.ComplexTypeNumberPropertyField('WTAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtGroups.percent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percent = new core_1.ComplexTypeNumberPropertyField('Percent', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumVatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumVatAmount = new core_1.ComplexTypeNumberPropertyField('SumVATAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumDocTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumDocTotal = new core_1.ComplexTypeNumberPropertyField('SumDocTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumBaseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumBaseAmount = new core_1.ComplexTypeNumberPropertyField('SumBaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumAccumAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumAccumAmount = new core_1.ComplexTypeNumberPropertyField('SumAccumAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.sumPerceptAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumPerceptAmount = new core_1.ComplexTypeNumberPropertyField('SumPerceptAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WtGroups.docsInWtGroupsCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docsInWtGroupsCollection = new core_1.CollectionField('DocsInWTGroupsCollection', _this, DocsInWtGroups_1.DocsInWtGroups);
        return _this;
    }
    return WtGroupsField;
}(core_1.ComplexTypeField));
exports.WtGroupsField = WtGroupsField;
var WtGroups;
(function (WtGroups) {
    /**
     * Metadata information on all properties of the `WtGroups` complex type.
     */
    WtGroups._propertyMetadata = [{
            originalName: 'WTAbsEntry',
            name: 'wtAbsEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Percent',
            name: 'percent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumVATAmount',
            name: 'sumVatAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumDocTotal',
            name: 'sumDocTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumBaseAmount',
            name: 'sumBaseAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumAccumAmount',
            name: 'sumAccumAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumPerceptAmount',
            name: 'sumPerceptAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocsInWTGroupsCollection',
            name: 'docsInWtGroupsCollection',
            type: DocsInWtGroups_1.DocsInWtGroups,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WtGroups);
    }
    WtGroups.build = build;
})(WtGroups = exports.WtGroups || (exports.WtGroups = {}));
//# sourceMappingURL=WtGroups.js.map