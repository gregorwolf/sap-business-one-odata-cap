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
exports.ServiceContractParams = exports.ServiceContractParamsField = exports.createServiceContractParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceContractParams.build]] instead.
 */
function createServiceContractParams(json) {
    return ServiceContractParams.build(json);
}
exports.createServiceContractParams = createServiceContractParams;
/**
 * ServiceContractParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceContractParamsField = /** @class */ (function (_super) {
    __extends(ServiceContractParamsField, _super);
    function ServiceContractParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceContractParams.contractId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contractId = new v4_1.ComplexTypeNumberPropertyField('ContractID', _this, 'Edm.Int32');
        return _this;
    }
    return ServiceContractParamsField;
}(v4_1.ComplexTypeField));
exports.ServiceContractParamsField = ServiceContractParamsField;
var ServiceContractParams;
(function (ServiceContractParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ContractID: function (contractId) { return ({ contractId: v4_1.edmToTs(contractId, 'Edm.Int32') }); }
        });
    }
    ServiceContractParams.build = build;
})(ServiceContractParams = exports.ServiceContractParams || (exports.ServiceContractParams = {}));
//# sourceMappingURL=ServiceContractParams.js.map