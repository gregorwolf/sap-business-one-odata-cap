import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EcmAction
 */
export interface EcmAction {
    /**
     * Action Id.
     * @nullable
     */
    actionId?: number;
    /**
     * Protocol.
     * @nullable
     */
    protocol?: string;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Message.
     * @nullable
     */
    message?: string;
    /**
     * Environment.
     * @nullable
     */
    environment?: number;
    /**
     * Business Place.
     * @nullable
     */
    businessPlace?: number;
    /**
     * Submits.
     * @nullable
     */
    submits?: number;
    /**
     * Object Id.
     * @nullable
     */
    objectId?: string;
    /**
     * Report Id.
     * @nullable
     */
    reportId?: string;
    /**
     * Source Type.
     * @nullable
     */
    sourceType?: string;
    /**
     * Source Object.
     * @nullable
     */
    sourceObject?: number;
    /**
     * Assigned Id.
     * @nullable
     */
    assignedId?: string;
    /**
     * Document Batch.
     * @nullable
     */
    documentBatch?: string;
    /**
     * Document Batch Line.
     * @nullable
     */
    documentBatchLine?: number;
    /**
     * Period Number.
     * @nullable
     */
    periodNumber?: number;
    /**
     * Period Year.
     * @nullable
     */
    periodYear?: number;
    /**
     * Period Date From.
     * @nullable
     */
    periodDateFrom?: Moment;
    /**
     * Period Date To.
     * @nullable
     */
    periodDateTo?: Moment;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmAction.build]] instead.
 */
export declare function createEcmAction(json: any): EcmAction;
/**
 * EcmActionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmActionField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EcmAction.actionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.protocol]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    protocol: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.message]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    message: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.environment]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    environment: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.businessPlace]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    businessPlace: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.submits]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    submits: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.objectId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    objectId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.reportId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    reportId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.sourceType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceType: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.sourceObject]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    sourceObject: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.assignedId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    assignedId: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.documentBatch]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentBatch: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.documentBatchLine]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    documentBatchLine: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.periodNumber]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodNumber: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.periodYear]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodYear: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.periodDateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodDateFrom: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.periodDateTo]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodDateTo: ComplexTypeDatePropertyField<EntityT>;
}
export declare namespace EcmAction {
    function build(json: {
        [keys: string]: FieldType;
    }): EcmAction;
}
//# sourceMappingURL=EcmAction.d.ts.map