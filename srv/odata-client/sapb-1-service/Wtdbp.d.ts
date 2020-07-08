import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * Wtdbp
 */
export interface Wtdbp {
    /**
     * Bp Key Part 1.
     * @nullable
     */
    bpKeyPart1?: string;
    /**
     * Bp Key Part 2.
     * @nullable
     */
    bpKeyPart2?: string;
    /**
     * W Tax Code.
     * @nullable
     */
    wTaxCode?: string;
    /**
     * Effective Date From.
     * @nullable
     */
    effectiveDateFrom?: Moment;
    /**
     * Effective Date To.
     * @nullable
     */
    effectiveDateTo?: Moment;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[Wtdbp.build]] instead.
 */
export declare function createWtdbp(json: any): Wtdbp;
/**
 * WtdbpField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class WtdbpField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[Wtdbp.bpKeyPart1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpKeyPart1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.bpKeyPart2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bpKeyPart2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.wTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    wTaxCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.effectiveDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.effectiveDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectiveDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[Wtdbp.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace Wtdbp {
    function build(json: {
        [keys: string]: FieldType;
    }): Wtdbp;
}
//# sourceMappingURL=Wtdbp.d.ts.map