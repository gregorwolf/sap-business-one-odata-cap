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
exports.BpIntrastatExtension = exports.BpIntrastatExtensionField = exports.createBpIntrastatExtension = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BpIntrastatExtension.build]] instead.
 */
function createBpIntrastatExtension(json) {
    return BpIntrastatExtension.build(json);
}
exports.createBpIntrastatExtension = createBpIntrastatExtension;
/**
 * BpIntrastatExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpIntrastatExtensionField = /** @class */ (function (_super) {
    __extends(BpIntrastatExtensionField, _super);
    function BpIntrastatExtensionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BpIntrastatExtension.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new v4_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpIntrastatExtension.transportMode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transportMode = new v4_1.ComplexTypeNumberPropertyField('TransportMode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.incoterms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.incoterms = new v4_1.ComplexTypeNumberPropertyField('Incoterms', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.natureOfTransactions]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.natureOfTransactions = new v4_1.ComplexTypeNumberPropertyField('NatureOfTransactions', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.statisticalProcedure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statisticalProcedure = new v4_1.ComplexTypeNumberPropertyField('StatisticalProcedure', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.customsProcedure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customsProcedure = new v4_1.ComplexTypeNumberPropertyField('CustomsProcedure', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.portOfEntryOrExit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portOfEntryOrExit = new v4_1.ComplexTypeNumberPropertyField('PortOfEntryOrExit', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpIntrastatExtension.domesticOrForeignId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.domesticOrForeignId = new v4_1.ComplexTypeStringPropertyField('DomesticOrForeignID', _this, 'Edm.String');
        return _this;
    }
    return BpIntrastatExtensionField;
}(v4_1.ComplexTypeField));
exports.BpIntrastatExtensionField = BpIntrastatExtensionField;
var BpIntrastatExtension;
(function (BpIntrastatExtension) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CardCode: function (cardCode) { return ({ cardCode: v4_1.edmToTs(cardCode, 'Edm.String') }); },
            TransportMode: function (transportMode) { return ({ transportMode: v4_1.edmToTs(transportMode, 'Edm.Int32') }); },
            Incoterms: function (incoterms) { return ({ incoterms: v4_1.edmToTs(incoterms, 'Edm.Int32') }); },
            NatureOfTransactions: function (natureOfTransactions) { return ({ natureOfTransactions: v4_1.edmToTs(natureOfTransactions, 'Edm.Int32') }); },
            StatisticalProcedure: function (statisticalProcedure) { return ({ statisticalProcedure: v4_1.edmToTs(statisticalProcedure, 'Edm.Int32') }); },
            CustomsProcedure: function (customsProcedure) { return ({ customsProcedure: v4_1.edmToTs(customsProcedure, 'Edm.Int32') }); },
            PortOfEntryOrExit: function (portOfEntryOrExit) { return ({ portOfEntryOrExit: v4_1.edmToTs(portOfEntryOrExit, 'Edm.Int32') }); },
            DomesticOrForeignID: function (domesticOrForeignId) { return ({ domesticOrForeignId: v4_1.edmToTs(domesticOrForeignId, 'Edm.String') }); }
        });
    }
    BpIntrastatExtension.build = build;
})(BpIntrastatExtension = exports.BpIntrastatExtension || (exports.BpIntrastatExtension = {}));
//# sourceMappingURL=BpIntrastatExtension.js.map