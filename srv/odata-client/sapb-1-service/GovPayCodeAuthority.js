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
exports.GovPayCodeAuthority = exports.GovPayCodeAuthorityField = exports.createGovPayCodeAuthority = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[GovPayCodeAuthority.build]] instead.
 */
function createGovPayCodeAuthority(json) {
    return GovPayCodeAuthority.build(json);
}
exports.createGovPayCodeAuthority = createGovPayCodeAuthority;
/**
 * GovPayCodeAuthorityField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GovPayCodeAuthorityField = /** @class */ (function (_super) {
    __extends(GovPayCodeAuthorityField, _super);
    function GovPayCodeAuthorityField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GovPayCodeAuthority.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new v4_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[GovPayCodeAuthority.bplId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplId = new v4_1.ComplexTypeNumberPropertyField('BPLId', _this, 'Edm.Int32');
        /**
         * Representation of the [[GovPayCodeAuthority.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new v4_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[GovPayCodeAuthority.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new v4_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        return _this;
    }
    return GovPayCodeAuthorityField;
}(v4_1.ComplexTypeField));
exports.GovPayCodeAuthorityField = GovPayCodeAuthorityField;
var GovPayCodeAuthority;
(function (GovPayCodeAuthority) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsId: function (absId) { return ({ absId: v4_1.edmToTs(absId, 'Edm.Int32') }); },
            BPLId: function (bplId) { return ({ bplId: v4_1.edmToTs(bplId, 'Edm.Int32') }); },
            State: function (state) { return ({ state: v4_1.edmToTs(state, 'Edm.String') }); },
            CardCode: function (cardCode) { return ({ cardCode: v4_1.edmToTs(cardCode, 'Edm.String') }); }
        });
    }
    GovPayCodeAuthority.build = build;
})(GovPayCodeAuthority = exports.GovPayCodeAuthority || (exports.GovPayCodeAuthority = {}));
//# sourceMappingURL=GovPayCodeAuthority.js.map