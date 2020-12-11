import { Moment } from 'moment';
import { ReconciliationAccountTypeEnum } from './ReconciliationAccountTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * ExternalReconciliationFilterParams
 */
export interface ExternalReconciliationFilterParams {
    /**
     * Account Code From.
     * @nullable
     */
    accountCodeFrom?: string;
    /**
     * Account Code To.
     * @nullable
     */
    accountCodeTo?: string;
    /**
     * Reconciliation Date From.
     * @nullable
     */
    reconciliationDateFrom?: Moment;
    /**
     * Reconciliation Date To.
     * @nullable
     */
    reconciliationDateTo?: Moment;
    /**
     * Reconciliation No From.
     * @nullable
     */
    reconciliationNoFrom?: number;
    /**
     * Reconciliation No To.
     * @nullable
     */
    reconciliationNoTo?: number;
    /**
     * Reconciliation Account Type.
     * @nullable
     */
    reconciliationAccountType?: ReconciliationAccountTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[ExternalReconciliationFilterParams.build]] instead.
 */
export declare function createExternalReconciliationFilterParams(json: any): ExternalReconciliationFilterParams;
/**
 * ExternalReconciliationFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExternalReconciliationFilterParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ExternalReconciliationFilterParams> {
    /**
     * Representation of the [[ExternalReconciliationFilterParams.accountCodeFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCodeFrom: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.accountCodeTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountCodeTo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationDateTo: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationNoFrom: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationNoTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationNoTo: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ExternalReconciliationFilterParams.reconciliationAccountType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconciliationAccountType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of ExternalReconciliationFilterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ExternalReconciliationFilterParams {
    /**
     * Metadata information on all properties of the `ExternalReconciliationFilterParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ExternalReconciliationFilterParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ExternalReconciliationFilterParams;
}
//# sourceMappingURL=ExternalReconciliationFilterParams.d.ts.map