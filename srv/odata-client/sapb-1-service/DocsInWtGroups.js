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
exports.DocsInWtGroups = exports.DocsInWtGroupsField = exports.createDocsInWtGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DocsInWtGroups.build]] instead.
 */
function createDocsInWtGroups(json) {
    return DocsInWtGroups.build(json);
}
exports.createDocsInWtGroups = createDocsInWtGroups;
/**
 * DocsInWtGroupsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocsInWtGroupsField = /** @class */ (function (_super) {
    __extends(DocsInWtGroupsField, _super);
    /**
     * Creates an instance of DocsInWtGroupsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocsInWtGroupsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocsInWtGroups) || this;
        /**
         * Representation of the [[DocsInWtGroups.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocsInWtGroups.docObjType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docObjType = new core_1.ComplexTypeStringPropertyField('DocObjType', _this, 'Edm.String');
        /**
         * Representation of the [[DocsInWtGroups.vatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmount = new core_1.ComplexTypeNumberPropertyField('VATAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.docTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docTotal = new core_1.ComplexTypeNumberPropertyField('DocTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.baseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseAmount = new core_1.ComplexTypeNumberPropertyField('BaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.accumAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumAmount = new core_1.ComplexTypeNumberPropertyField('AccumAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.perceptAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.perceptAmount = new core_1.ComplexTypeNumberPropertyField('PerceptAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocsInWtGroups.percent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percent = new core_1.ComplexTypeNumberPropertyField('Percent', _this, 'Edm.Double');
        return _this;
    }
    return DocsInWtGroupsField;
}(core_1.ComplexTypeField));
exports.DocsInWtGroupsField = DocsInWtGroupsField;
var DocsInWtGroups;
(function (DocsInWtGroups) {
    /**
     * Metadata information on all properties of the `DocsInWtGroups` complex type.
     */
    DocsInWtGroups._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocObjType',
            name: 'docObjType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VATAmount',
            name: 'vatAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocTotal',
            name: 'docTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseAmount',
            name: 'baseAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumAmount',
            name: 'accumAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PerceptAmount',
            name: 'perceptAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Percent',
            name: 'percent',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocsInWtGroups);
    }
    DocsInWtGroups.build = build;
})(DocsInWtGroups = exports.DocsInWtGroups || (exports.DocsInWtGroups = {}));
//# sourceMappingURL=DocsInWtGroups.js.map