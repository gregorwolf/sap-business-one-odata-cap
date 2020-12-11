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
exports.JournalEntryDocumentTypeParams = exports.JournalEntryDocumentTypeParamsField = exports.createJournalEntryDocumentTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[JournalEntryDocumentTypeParams.build]] instead.
 */
function createJournalEntryDocumentTypeParams(json) {
    return JournalEntryDocumentTypeParams.build(json);
}
exports.createJournalEntryDocumentTypeParams = createJournalEntryDocumentTypeParams;
/**
 * JournalEntryDocumentTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var JournalEntryDocumentTypeParamsField = /** @class */ (function (_super) {
    __extends(JournalEntryDocumentTypeParamsField, _super);
    /**
     * Creates an instance of JournalEntryDocumentTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function JournalEntryDocumentTypeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, JournalEntryDocumentTypeParams) || this;
        /**
         * Representation of the [[JournalEntryDocumentTypeParams.journalEntryType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.journalEntryType = new core_1.ComplexTypeStringPropertyField('JournalEntryType', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryDocumentTypeParams.docTypeDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docTypeDescription = new core_1.ComplexTypeStringPropertyField('DocTypeDescription', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryDocumentTypeParams.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new core_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        return _this;
    }
    return JournalEntryDocumentTypeParamsField;
}(core_1.ComplexTypeField));
exports.JournalEntryDocumentTypeParamsField = JournalEntryDocumentTypeParamsField;
var JournalEntryDocumentTypeParams;
(function (JournalEntryDocumentTypeParams) {
    /**
     * Metadata information on all properties of the `JournalEntryDocumentTypeParams` complex type.
     */
    JournalEntryDocumentTypeParams._propertyMetadata = [{
            originalName: 'JournalEntryType',
            name: 'journalEntryType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocTypeDescription',
            name: 'docTypeDescription',
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
        return core_1.deserializeComplexTypeV4(json, JournalEntryDocumentTypeParams);
    }
    JournalEntryDocumentTypeParams.build = build;
})(JournalEntryDocumentTypeParams = exports.JournalEntryDocumentTypeParams || (exports.JournalEntryDocumentTypeParams = {}));
//# sourceMappingURL=JournalEntryDocumentTypeParams.js.map