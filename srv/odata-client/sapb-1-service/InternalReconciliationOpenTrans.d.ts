import { Moment } from 'moment';
import { InternalReconciliationOpenTransRow } from './InternalReconciliationOpenTransRow';
import { CardOrAccountEnum } from './CardOrAccountEnum';
import { CollectionField, ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
/**
 * InternalReconciliationOpenTrans
 */
export interface InternalReconciliationOpenTrans {
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
     * Internal Reconciliation Open Trans Rows.
     * @nullable
     */
    internalReconciliationOpenTransRows?: InternalReconciliationOpenTransRow[];
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTrans.build]] instead.
 */
export declare function createInternalReconciliationOpenTrans(json: any): InternalReconciliationOpenTrans;
/**
 * InternalReconciliationOpenTransField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationOpenTransField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, InternalReconciliationOpenTrans> {
    /**
     * Representation of the [[InternalReconciliationOpenTrans.reconDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTrans.cardOrAccount]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    cardOrAccount: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTrans.internalReconciliationOpenTransRows]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalReconciliationOpenTransRows: CollectionField<EntityT, InternalReconciliationOpenTransRow>;
    /**
     * Creates an instance of InternalReconciliationOpenTransField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace InternalReconciliationOpenTrans {
    /**
     * Metadata information on all properties of the `InternalReconciliationOpenTrans` complex type.
     */
    const _propertyMetadata: PropertyMetadata<InternalReconciliationOpenTrans>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType | InternalReconciliationOpenTransRow;
    }): InternalReconciliationOpenTrans;
}
//# sourceMappingURL=InternalReconciliationOpenTrans.d.ts.map