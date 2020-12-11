import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * OpenningBalanceAccount
 */
export interface OpenningBalanceAccount {
    /**
     * Open Balance Account.
     * @nullable
     */
    openBalanceAccount?: string;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Ref 1.
     * @nullable
     */
    ref1?: string;
    /**
     * Ref 2.
     * @nullable
     */
    ref2?: string;
    /**
     * Details.
     * @nullable
     */
    details?: string;
    /**
     * Bplid.
     * @nullable
     */
    bplid?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[OpenningBalanceAccount.build]] instead.
 */
export declare function createOpenningBalanceAccount(json: any): OpenningBalanceAccount;
/**
 * OpenningBalanceAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class OpenningBalanceAccountField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, OpenningBalanceAccount> {
    /**
     * Representation of the [[OpenningBalanceAccount.openBalanceAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    openBalanceAccount: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OpenningBalanceAccount.date]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    date: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[OpenningBalanceAccount.ref1]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ref1: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OpenningBalanceAccount.ref2]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    ref2: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OpenningBalanceAccount.details]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    details: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[OpenningBalanceAccount.bplid]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    bplid: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Creates an instance of OpenningBalanceAccountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace OpenningBalanceAccount {
    /**
     * Metadata information on all properties of the `OpenningBalanceAccount` complex type.
     */
    const _propertyMetadata: PropertyMetadata<OpenningBalanceAccount>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): OpenningBalanceAccount;
}
//# sourceMappingURL=OpenningBalanceAccount.d.ts.map