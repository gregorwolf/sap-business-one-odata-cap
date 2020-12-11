import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
    /**
     * Choose.
     * @nullable
     */
    choose?: BoYesNoEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[CurrencyRestriction.build]] instead.
 */
export declare function createCurrencyRestriction(json: any): CurrencyRestriction;
/**
 * CurrencyRestrictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class CurrencyRestrictionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, CurrencyRestriction> {
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
    /**
     * Representation of the [[CurrencyRestriction.choose]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    choose: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of CurrencyRestrictionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace CurrencyRestriction {
    /**
     * Metadata information on all properties of the `CurrencyRestriction` complex type.
     */
    const _propertyMetadata: PropertyMetadata<CurrencyRestriction>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): CurrencyRestriction;
}
//# sourceMappingURL=CurrencyRestriction.d.ts.map