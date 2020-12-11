import { Moment } from 'moment';
import { EcmActionTypeEnum } from './EcmActionTypeEnum';
import { EcmActionStatusEnum } from './EcmActionStatusEnum';
import { EcmActionPeriodTypeEnum } from './EcmActionPeriodTypeEnum';
import { BoYesNoEnum } from './BoYesNoEnum';
import { EcmActionGenerationTypeEnum } from './EcmActionGenerationTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Type.
     * @nullable
     */
    type?: EcmActionTypeEnum;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Status.
     * @nullable
     */
    status?: EcmActionStatusEnum;
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
     * Period Type.
     * @nullable
     */
    periodType?: EcmActionPeriodTypeEnum;
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
    /**
     * Is Removed.
     * @nullable
     */
    isRemoved?: BoYesNoEnum;
    /**
     * Is Canceled.
     * @nullable
     */
    isCanceled?: BoYesNoEnum;
    /**
     * Generation Type.
     * @nullable
     */
    generationType?: EcmActionGenerationTypeEnum;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmAction.build]] instead.
 */
export declare function createEcmAction(json: any): EcmAction;
/**
 * EcmActionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmActionField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmAction> {
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
     * Representation of the [[EcmAction.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.description]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    description: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
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
     * Representation of the [[EcmAction.periodType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    periodType: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Representation of the [[EcmAction.isRemoved]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isRemoved: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.isCanceled]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    isCanceled: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[EcmAction.generationType]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    generationType: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Creates an instance of EcmActionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EcmAction {
    /**
     * Metadata information on all properties of the `EcmAction` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EcmAction>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EcmAction;
}
//# sourceMappingURL=EcmAction.d.ts.map