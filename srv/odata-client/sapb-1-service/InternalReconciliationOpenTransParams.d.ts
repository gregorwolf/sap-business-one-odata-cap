import { Moment } from 'moment';
import { InternalReconciliationBp } from './InternalReconciliationBp';
import { CardOrAccountEnum } from './CardOrAccountEnum';
import { ReconSelectDateTypeEnum } from './ReconSelectDateTypeEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InternalReconciliationOpenTransParams
 */
export interface InternalReconciliationOpenTransParams {
    /**
     * Recon Date.
     * @nullable
     */
    reconDate?: Moment;
    /**
     * Card Or Account.
     * @nullable
     */
    cardOrAccount?: CardOrAccountEnum;
    /**
     * Account No.
     * @nullable
     */
    accountNo?: string;
    /**
     * Date Type.
     * @nullable
     */
    dateType?: ReconSelectDateTypeEnum;
    /**
     * From Date.
     * @nullable
     */
    fromDate?: Moment;
    /**
     * To Date.
     * @nullable
     */
    toDate?: Moment;
    /**
     * Internal Reconciliation B Ps.
     * @nullable
     */
    internalReconciliationBPs?: InternalReconciliationBp[];
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTransParams.build]] instead.
 */
export declare function createInternalReconciliationOpenTransParams(json: any): InternalReconciliationOpenTransParams;
/**
 * InternalReconciliationOpenTransParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationOpenTransParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationOpenTransParams> {
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.reconDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.cardOrAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardOrAccount: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.accountNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountNo: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.dateType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    dateType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.fromDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    fromDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.toDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    toDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.internalReconciliationBPs]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalReconciliationBPs: CollectionField<EntityT, InternalReconciliationBp>;
    /**
     * Creates an instance of InternalReconciliationOpenTransParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InternalReconciliationOpenTransParams {
    /**
     * Metadata information on all properties of the `InternalReconciliationOpenTransParams` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InternalReconciliationOpenTransParams>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | InternalReconciliationBp;
    }): InternalReconciliationOpenTransParams;
}
//# sourceMappingURL=InternalReconciliationOpenTransParams.d.ts.map