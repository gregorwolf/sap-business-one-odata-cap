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
exports.ResourceCapacityParams = exports.ResourceCapacityParamsField = exports.createResourceCapacityParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ResourceCapacityParams.build]] instead.
 */
function createResourceCapacityParams(json) {
    return ResourceCapacityParams.build(json);
}
exports.createResourceCapacityParams = createResourceCapacityParams;
/**
 * ResourceCapacityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ResourceCapacityParamsField = /** @class */ (function (_super) {
    __extends(ResourceCapacityParamsField, _super);
    function ResourceCapacityParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ResourceCapacityParams.id]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.id = new v4_1.ComplexTypeNumberPropertyField('Id', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityParams.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ResourceCapacityParams.capacity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.capacity = new v4_1.ComplexTypeNumberPropertyField('Capacity', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceCapacityParams.sourceEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceEntry = new v4_1.ComplexTypeNumberPropertyField('SourceEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.sourceLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sourceLineNum = new v4_1.ComplexTypeNumberPropertyField('SourceLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new v4_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.baseLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNum = new v4_1.ComplexTypeNumberPropertyField('BaseLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.owningEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owningEntry = new v4_1.ComplexTypeNumberPropertyField('OwningEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.owningLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.owningLineNum = new v4_1.ComplexTypeNumberPropertyField('OwningLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.revertedEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revertedEntry = new v4_1.ComplexTypeNumberPropertyField('RevertedEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.revertedLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revertedLineNum = new v4_1.ComplexTypeNumberPropertyField('RevertedLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ResourceCapacityParams.memo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.memo = new v4_1.ComplexTypeStringPropertyField('Memo', _this, 'Edm.String');
        /**
         * Representation of the [[ResourceCapacityParams.singleRunCapacity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.singleRunCapacity = new v4_1.ComplexTypeNumberPropertyField('SingleRunCapacity', _this, 'Edm.Double');
        /**
         * Representation of the [[ResourceCapacityParams.singleRunMemo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.singleRunMemo = new v4_1.ComplexTypeStringPropertyField('SingleRunMemo', _this, 'Edm.String');
        return _this;
    }
    return ResourceCapacityParamsField;
}(v4_1.ComplexTypeField));
exports.ResourceCapacityParamsField = ResourceCapacityParamsField;
var ResourceCapacityParams;
(function (ResourceCapacityParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Id: function (id) { return ({ id: v4_1.edmToTs(id, 'Edm.Int32') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); },
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); },
            Capacity: function (capacity) { return ({ capacity: v4_1.edmToTs(capacity, 'Edm.Double') }); },
            SourceEntry: function (sourceEntry) { return ({ sourceEntry: v4_1.edmToTs(sourceEntry, 'Edm.Int32') }); },
            SourceLineNum: function (sourceLineNum) { return ({ sourceLineNum: v4_1.edmToTs(sourceLineNum, 'Edm.Int32') }); },
            BaseEntry: function (baseEntry) { return ({ baseEntry: v4_1.edmToTs(baseEntry, 'Edm.Int32') }); },
            BaseLineNum: function (baseLineNum) { return ({ baseLineNum: v4_1.edmToTs(baseLineNum, 'Edm.Int32') }); },
            OwningEntry: function (owningEntry) { return ({ owningEntry: v4_1.edmToTs(owningEntry, 'Edm.Int32') }); },
            OwningLineNum: function (owningLineNum) { return ({ owningLineNum: v4_1.edmToTs(owningLineNum, 'Edm.Int32') }); },
            RevertedEntry: function (revertedEntry) { return ({ revertedEntry: v4_1.edmToTs(revertedEntry, 'Edm.Int32') }); },
            RevertedLineNum: function (revertedLineNum) { return ({ revertedLineNum: v4_1.edmToTs(revertedLineNum, 'Edm.Int32') }); },
            Memo: function (memo) { return ({ memo: v4_1.edmToTs(memo, 'Edm.String') }); },
            SingleRunCapacity: function (singleRunCapacity) { return ({ singleRunCapacity: v4_1.edmToTs(singleRunCapacity, 'Edm.Double') }); },
            SingleRunMemo: function (singleRunMemo) { return ({ singleRunMemo: v4_1.edmToTs(singleRunMemo, 'Edm.String') }); }
        });
    }
    ResourceCapacityParams.build = build;
})(ResourceCapacityParams = exports.ResourceCapacityParams || (exports.ResourceCapacityParams = {}));
//# sourceMappingURL=ResourceCapacityParams.js.map