import { Moment } from 'moment';
import { InternalReconciliationOpenTransRow, InternalReconciliationOpenTransRowField } from './InternalReconciliationOpenTransRow';
import { ComplexTypeDatePropertyField, ComplexTypeField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
     * Internal Reconciliation Open Trans Rows.
     * @nullable
     */
    internalReconciliationOpenTransRows?: InternalReconciliationOpenTransRow;
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTrans.build]] instead.
 */
export declare function createInternalReconciliationOpenTrans(json: any): InternalReconciliationOpenTrans;
/**
 * InternalReconciliationOpenTransField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationOpenTransField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InternalReconciliationOpenTrans.reconDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTrans.internalReconciliationOpenTransRows]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    internalReconciliationOpenTransRows: InternalReconciliationOpenTransRowField<EntityT>;
}
export declare namespace InternalReconciliationOpenTrans {
    function build(json: {
        [keys: string]: FieldType | InternalReconciliationOpenTransRow;
    }): InternalReconciliationOpenTrans;
}
//# sourceMappingURL=InternalReconciliationOpenTrans.d.ts.map