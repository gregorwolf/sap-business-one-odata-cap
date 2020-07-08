import { TaxCodeDeterminationTcdKeyFieldValue, TaxCodeDeterminationTcdKeyFieldValueField } from './TaxCodeDeterminationTcdKeyFieldValue';
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * TaxCodeDeterminationTcdKeyField
 */
export interface TaxCodeDeterminationTcdKeyField {
    /**
     * Abs Id.
     * @nullable
     */
    absId?: number;
    /**
     * Descr.
     * @nullable
     */
    descr?: string;
    /**
     * Priority.
     * @nullable
     */
    priority?: number;
    /**
     * Key Fld 1.
     * @nullable
     */
    keyFld1?: number;
    /**
     * Udf Table 1.
     * @nullable
     */
    udfTable1?: string;
    /**
     * Udf Alias 1.
     * @nullable
     */
    udfAlias1?: string;
    /**
     * Key Fld 2.
     * @nullable
     */
    keyFld2?: number;
    /**
     * Udf Table 2.
     * @nullable
     */
    udfTable2?: string;
    /**
     * Udf Alias 2.
     * @nullable
     */
    udfAlias2?: string;
    /**
     * Key Fld 3.
     * @nullable
     */
    keyFld3?: number;
    /**
     * Udf Table 3.
     * @nullable
     */
    udfTable3?: string;
    /**
     * Udf Alias 3.
     * @nullable
     */
    udfAlias3?: string;
    /**
     * Key Fld 4.
     * @nullable
     */
    keyFld4?: number;
    /**
     * Udf Table 4.
     * @nullable
     */
    udfTable4?: string;
    /**
     * Udf Alias 4.
     * @nullable
     */
    udfAlias4?: string;
    /**
     * Tax Code Determination Tcd Key Field Values.
     * @nullable
     */
    taxCodeDeterminationTcdKeyFieldValues?: TaxCodeDeterminationTcdKeyFieldValue;
}
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdKeyField.build]] instead.
 */
export declare function createTaxCodeDeterminationTcdKeyField(json: any): TaxCodeDeterminationTcdKeyField;
/**
 * TaxCodeDeterminationTcdKeyFieldField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class TaxCodeDeterminationTcdKeyFieldField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.absId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    absId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.descr]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    descr: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.priority]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    priority: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFld1: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfTable1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfAlias1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFld2: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfTable2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfAlias2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFld3: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfTable3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias3]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfAlias3: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.keyFld4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    keyFld4: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.udfTable4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfTable4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.udfAlias4]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    udfAlias4: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[TaxCodeDeterminationTcdKeyField.taxCodeDeterminationTcdKeyFieldValues]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    taxCodeDeterminationTcdKeyFieldValues: TaxCodeDeterminationTcdKeyFieldValueField<EntityT>;
}
export declare namespace TaxCodeDeterminationTcdKeyField {
    function build(json: {
        [keys: string]: FieldType | TaxCodeDeterminationTcdKeyFieldValue;
    }): TaxCodeDeterminationTcdKeyField;
}
//# sourceMappingURL=TaxCodeDeterminationTcdKeyField.d.ts.map