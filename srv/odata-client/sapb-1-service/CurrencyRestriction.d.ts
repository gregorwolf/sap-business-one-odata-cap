import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * CurrencyRestriction
 */
export interface CurrencyRestriction {
    /**
     * Payment Method Code.
     * @nullable
     */
    paymentMethodCode?: string;
    /**
     * Currency Code.
     * @nullable
     */
    currencyCode?: string;
    /**
     * Currency Name.
     * @nullable
     */
    currencyName?: string;
}
/**
 * @deprecated Since v1.6.0. Use [[CurrencyRestriction.build]] instead.
 */
export declare function createCurrencyRestriction(json: any): CurrencyRestriction;
/**
 * CurrencyRestrictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CurrencyRestrictionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[CurrencyRestriction.paymentMethodCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    paymentMethodCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CurrencyRestriction.currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currencyCode: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[CurrencyRestriction.currencyName]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    currencyName: ComplexTypeStringPropertyField<EntityT>;
}
export declare namespace CurrencyRestriction {
    function build(json: {
        [keys: string]: FieldType;
    }): CurrencyRestriction;
}
//# sourceMappingURL=CurrencyRestriction.d.ts.map