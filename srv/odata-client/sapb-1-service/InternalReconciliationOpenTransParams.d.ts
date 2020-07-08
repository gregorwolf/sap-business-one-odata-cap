import { Moment } from 'moment';
import { InternalReconciliationBp, InternalReconciliationBpField } from './InternalReconciliationBp';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
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
     * Account No.
     * @nullable
     */
    accountNo?: string;
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
    internalReconciliationBPs?: InternalReconciliationBp;
}
/**
 * @deprecated Since v1.6.0. Use [[InternalReconciliationOpenTransParams.build]] instead.
 */
export declare function createInternalReconciliationOpenTransParams(json: any): InternalReconciliationOpenTransParams;
/**
 * InternalReconciliationOpenTransParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class InternalReconciliationOpenTransParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.reconDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reconDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[InternalReconciliationOpenTransParams.accountNo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    accountNo: ComplexTypeStringPropertyField<EntityT>;
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
    internalReconciliationBPs: InternalReconciliationBpField<EntityT>;
}
export declare namespace InternalReconciliationOpenTransParams {
    function build(json: {
        [keys: string]: FieldType | InternalReconciliationBp;
    }): InternalReconciliationOpenTransParams;
}
//# sourceMappingURL=InternalReconciliationOpenTransParams.d.ts.map