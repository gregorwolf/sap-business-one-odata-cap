import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxDefinition
 */
export interface TaxDefinition {
    /**
     * Effectivefrom.
     * @nullable
     */
    effectivefrom?: Moment;
    /**
     * Rate.
     * @nullable
     */
    rate?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxDefinition.build]] instead.
 */
export declare function createTaxDefinition(json: any): TaxDefinition;
/**
 * TaxDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxDefinitionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxDefinition.effectivefrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    effectivefrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[TaxDefinition.rate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    rate: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace TaxDefinition {
    function build(json: {
        [keys: string]: FieldType;
    }): TaxDefinition;
}
//# sourceMappingURL=TaxDefinition.d.ts.map