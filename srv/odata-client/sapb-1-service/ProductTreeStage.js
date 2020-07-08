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
exports.ProductTreeStage = exports.ProductTreeStageField = exports.createProductTreeStage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ProductTreeStage.build]] instead.
 */
function createProductTreeStage(json) {
    return ProductTreeStage.build(json);
}
exports.createProductTreeStage = createProductTreeStage;
/**
 * ProductTreeStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProductTreeStageField = /** @class */ (function (_super) {
    __extends(ProductTreeStageField, _super);
    function ProductTreeStageField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ProductTreeStage.father]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.father = new v4_1.ComplexTypeStringPropertyField('Father', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeStage.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeStage.sequenceNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNumber = new v4_1.ComplexTypeNumberPropertyField('SequenceNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeStage.stageEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageEntry = new v4_1.ComplexTypeNumberPropertyField('StageEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeStage.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeStage.waitingDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.waitingDays = new v4_1.ComplexTypeNumberPropertyField('WaitingDays', _this, 'Edm.Double');
        return _this;
    }
    return ProductTreeStageField;
}(v4_1.ComplexTypeField));
exports.ProductTreeStageField = ProductTreeStageField;
var ProductTreeStage;
(function (ProductTreeStage) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Father: function (father) { return ({ father: v4_1.edmToTs(father, 'Edm.String') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            SequenceNumber: function (sequenceNumber) { return ({ sequenceNumber: v4_1.edmToTs(sequenceNumber, 'Edm.Int32') }); },
            StageEntry: function (stageEntry) { return ({ stageEntry: v4_1.edmToTs(stageEntry, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            WaitingDays: function (waitingDays) { return ({ waitingDays: v4_1.edmToTs(waitingDays, 'Edm.Double') }); }
        });
    }
    ProductTreeStage.build = build;
})(ProductTreeStage = exports.ProductTreeStage || (exports.ProductTreeStage = {}));
//# sourceMappingURL=ProductTreeStage.js.map