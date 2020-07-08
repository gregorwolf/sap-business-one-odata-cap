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
exports.AssetDocumentAreaJournal = exports.AssetDocumentAreaJournalField = exports.createAssetDocumentAreaJournal = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AssetDocumentAreaJournal.build]] instead.
 */
function createAssetDocumentAreaJournal(json) {
    return AssetDocumentAreaJournal.build(json);
}
exports.createAssetDocumentAreaJournal = createAssetDocumentAreaJournal;
/**
 * AssetDocumentAreaJournalField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AssetDocumentAreaJournalField = /** @class */ (function (_super) {
    __extends(AssetDocumentAreaJournalField, _super);
    function AssetDocumentAreaJournalField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AssetDocumentAreaJournal.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentAreaJournal.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentAreaJournal.depreciationArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationArea = new v4_1.ComplexTypeStringPropertyField('DepreciationArea', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentAreaJournal.journalRemarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.journalRemarks = new v4_1.ComplexTypeStringPropertyField('JournalRemarks', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentAreaJournal.transactionNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionNumber = new v4_1.ComplexTypeNumberPropertyField('TransactionNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[AssetDocumentAreaJournal.cancellationJournalRemarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cancellationJournalRemarks = new v4_1.ComplexTypeStringPropertyField('CancellationJournalRemarks', _this, 'Edm.String');
        /**
         * Representation of the [[AssetDocumentAreaJournal.cancellationTransactionNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cancellationTransactionNumber = new v4_1.ComplexTypeNumberPropertyField('CancellationTransactionNumber', _this, 'Edm.Int32');
        return _this;
    }
    return AssetDocumentAreaJournalField;
}(v4_1.ComplexTypeField));
exports.AssetDocumentAreaJournalField = AssetDocumentAreaJournalField;
var AssetDocumentAreaJournal;
(function (AssetDocumentAreaJournal) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            DepreciationArea: function (depreciationArea) { return ({ depreciationArea: v4_1.edmToTs(depreciationArea, 'Edm.String') }); },
            JournalRemarks: function (journalRemarks) { return ({ journalRemarks: v4_1.edmToTs(journalRemarks, 'Edm.String') }); },
            TransactionNumber: function (transactionNumber) { return ({ transactionNumber: v4_1.edmToTs(transactionNumber, 'Edm.Int32') }); },
            CancellationJournalRemarks: function (cancellationJournalRemarks) { return ({ cancellationJournalRemarks: v4_1.edmToTs(cancellationJournalRemarks, 'Edm.String') }); },
            CancellationTransactionNumber: function (cancellationTransactionNumber) { return ({ cancellationTransactionNumber: v4_1.edmToTs(cancellationTransactionNumber, 'Edm.Int32') }); }
        });
    }
    AssetDocumentAreaJournal.build = build;
})(AssetDocumentAreaJournal = exports.AssetDocumentAreaJournal || (exports.AssetDocumentAreaJournal = {}));
//# sourceMappingURL=AssetDocumentAreaJournal.js.map