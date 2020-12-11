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
exports.BoeDocumentTypeParams = exports.BoeDocumentTypeParamsField = exports.createBoeDocumentTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BoeDocumentTypeParams.build]] instead.
 */
function createBoeDocumentTypeParams(json) {
    return BoeDocumentTypeParams.build(json);
}
exports.createBoeDocumentTypeParams = createBoeDocumentTypeParams;
/**
 * BoeDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BoeDocumentTypeParamsField = /** @class */ (function (_super) {
    __extends(BoeDocumentTypeParamsField, _super);
    /**
     * Creates an instance of BoeDocumentTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BoeDocumentTypeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BoeDocumentTypeParams) || this;
        /**
         * Representation of the [[BoeDocumentTypeParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BoeDocumentTypeParams.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new core_1.ComplexTypeStringPropertyField('DocType', _this, 'Edm.String');
        return _this;
    }
    return BoeDocumentTypeParamsField;
}(core_1.ComplexTypeField));
exports.BoeDocumentTypeParamsField = BoeDocumentTypeParamsField;
var BoeDocumentTypeParams;
(function (BoeDocumentTypeParams) {
    /**
     * Metadata information on all properties of the `BoeDocumentTypeParams` complex type.
     */
    BoeDocumentTypeParams._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocType',
            name: 'docType',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BoeDocumentTypeParams);
    }
    BoeDocumentTypeParams.build = build;
})(BoeDocumentTypeParams = exports.BoeDocumentTypeParams || (exports.BoeDocumentTypeParams = {}));
//# sourceMappingURL=BoeDocumentTypeParams.js.map