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
exports.BlobParams = exports.BlobParamsField = exports.createBlobParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BlobTableKeySegment_1 = require("./BlobTableKeySegment");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BlobParams.build]] instead.
 */
function createBlobParams(json) {
    return BlobParams.build(json);
}
exports.createBlobParams = createBlobParams;
/**
 * BlobParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlobParamsField = /** @class */ (function (_super) {
    __extends(BlobParamsField, _super);
    function BlobParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BlobParams.table]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.table = new v4_1.ComplexTypeStringPropertyField('Table', _this, 'Edm.String');
        /**
         * Representation of the [[BlobParams.field]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.field = new v4_1.ComplexTypeStringPropertyField('Field', _this, 'Edm.String');
        /**
         * Representation of the [[BlobParams.fileName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileName = new v4_1.ComplexTypeStringPropertyField('FileName', _this, 'Edm.String');
        /**
         * Representation of the [[BlobParams.blobTableKeySegments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blobTableKeySegments = new BlobTableKeySegment_1.BlobTableKeySegmentField('BlobTableKeySegments', _this);
        return _this;
    }
    return BlobParamsField;
}(v4_1.ComplexTypeField));
exports.BlobParamsField = BlobParamsField;
var BlobParams;
(function (BlobParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Table: function (table) { return ({ table: v4_1.edmToTs(table, 'Edm.String') }); },
            Field: function (field) { return ({ field: v4_1.edmToTs(field, 'Edm.String') }); },
            FileName: function (fileName) { return ({ fileName: v4_1.edmToTs(fileName, 'Edm.String') }); },
            BlobTableKeySegments: function (blobTableKeySegments) { return ({ blobTableKeySegments: BlobTableKeySegment_1.BlobTableKeySegment.build(blobTableKeySegments) }); }
        });
    }
    BlobParams.build = build;
})(BlobParams = exports.BlobParams || (exports.BlobParams = {}));
//# sourceMappingURL=BlobParams.js.map