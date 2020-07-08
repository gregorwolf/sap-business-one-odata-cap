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
exports.ServiceContractLine = exports.ServiceContractLineField = exports.createServiceContractLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceContractLine.build]] instead.
 */
function createServiceContractLine(json) {
    return ServiceContractLine.build(json);
}
exports.createServiceContractLine = createServiceContractLine;
/**
 * ServiceContractLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceContractLineField = /** @class */ (function (_super) {
    __extends(ServiceContractLineField, _super);
    function ServiceContractLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceContractLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceContractLine.manufacturerSerialNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manufacturerSerialNum = new v4_1.ComplexTypeStringPropertyField('ManufacturerSerialNum', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.internalSerialNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalSerialNum = new v4_1.ComplexTypeStringPropertyField('InternalSerialNum', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.itemName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemName = new v4_1.ComplexTypeStringPropertyField('ItemName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.itemGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroup = new v4_1.ComplexTypeNumberPropertyField('ItemGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceContractLine.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceContractLine.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new v4_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceContractLine.itemGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroupName = new v4_1.ComplexTypeStringPropertyField('ItemGroupName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceContractLine.terminationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.terminationDate = new v4_1.ComplexTypeDatePropertyField('TerminationDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return ServiceContractLineField;
}(v4_1.ComplexTypeField));
exports.ServiceContractLineField = ServiceContractLineField;
var ServiceContractLine;
(function (ServiceContractLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            ManufacturerSerialNum: function (manufacturerSerialNum) { return ({ manufacturerSerialNum: v4_1.edmToTs(manufacturerSerialNum, 'Edm.String') }); },
            InternalSerialNum: function (internalSerialNum) { return ({ internalSerialNum: v4_1.edmToTs(internalSerialNum, 'Edm.String') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemName: function (itemName) { return ({ itemName: v4_1.edmToTs(itemName, 'Edm.String') }); },
            ItemGroup: function (itemGroup) { return ({ itemGroup: v4_1.edmToTs(itemGroup, 'Edm.Int32') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            EndDate: function (endDate) { return ({ endDate: v4_1.edmToTs(endDate, 'Edm.DateTimeOffset') }); },
            ItemGroupName: function (itemGroupName) { return ({ itemGroupName: v4_1.edmToTs(itemGroupName, 'Edm.String') }); },
            TerminationDate: function (terminationDate) { return ({ terminationDate: v4_1.edmToTs(terminationDate, 'Edm.DateTimeOffset') }); }
        });
    }
    ServiceContractLine.build = build;
})(ServiceContractLine = exports.ServiceContractLine || (exports.ServiceContractLine = {}));
//# sourceMappingURL=ServiceContractLine.js.map