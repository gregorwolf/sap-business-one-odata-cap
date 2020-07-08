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
exports.JournalEntryDocumentTypeParams = exports.JournalEntryDocumentTypeParamsField = exports.createJournalEntryDocumentTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function JournalEntryDocumentTypeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[JournalEntryDocumentTypeParams.journalEntryType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.journalEntryType = new v4_1.ComplexTypeStringPropertyField('JournalEntryType', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryDocumentTypeParams.docTypeDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docTypeDescription = new v4_1.ComplexTypeStringPropertyField('DocTypeDescription', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryDocumentTypeParams.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new v4_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        return _this;
    }
    return JournalEntryDocumentTypeParamsField;
}(v4_1.ComplexTypeField));
exports.JournalEntryDocumentTypeParamsField = JournalEntryDocumentTypeParamsField;
var JournalEntryDocumentTypeParams;
(function (JournalEntryDocumentTypeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            JournalEntryType: function (journalEntryType) { return ({ journalEntryType: v4_1.edmToTs(journalEntryType, 'Edm.String') }); },
            DocTypeDescription: function (docTypeDescription) { return ({ docTypeDescription: v4_1.edmToTs(docTypeDescription, 'Edm.String') }); },
            ShortName: function (shortName) { return ({ shortName: v4_1.edmToTs(shortName, 'Edm.String') }); }
        });
    }
    JournalEntryDocumentTypeParams.build = build;
})(JournalEntryDocumentTypeParams = exports.JournalEntryDocumentTypeParams || (exports.JournalEntryDocumentTypeParams = {}));
//# sourceMappingURL=JournalEntryDocumentTypeParams.js.map