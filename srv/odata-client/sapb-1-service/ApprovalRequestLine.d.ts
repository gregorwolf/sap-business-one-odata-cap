import { Moment } from 'moment';
import { BoApprovalRequestDecisionEnum } from './BoApprovalRequestDecisionEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, Time } from '@sap-cloud-sdk/core';
/**
 * ApprovalRequestLine
 */
export interface ApprovalRequestLine {
    /**
     * Stage Code.
     * @nullable
     */
    stageCode?: number;
    /**
     * User Id.
     * @nullable
     */
    userId?: number;
    /**
     * Status.
     * @nullable
     */
    status?: BoApprovalRequestDecisionEnum;
    /**
     * Remarks.
     * @nullable
     */
    remarks?: string;
    /**
     * Update Date.
     * @nullable
     */
    updateDate?: Moment;
    /**
     * Update Time.
     * @nullable
     */
    updateTime?: Time;
    /**
     * Creation Date.
     * @nullable
     */
    creationDate?: Moment;
    /**
     * Creation Time.
     * @nullable
     */
    creationTime?: Time;
}
/**
 * @deprecated Since v1.6.0. Use [[ApprovalRequestLine.build]] instead.
 */
export declare function createApprovalRequestLine(json: any): ApprovalRequestLine;
/**
 * ApprovalRequestLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ApprovalRequestLineField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, ApprovalRequestLine> {
    /**
     * Representation of the [[ApprovalRequestLine.stageCode]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    stageCode: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestLine.userId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    userId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestLine.status]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    status: ComplexTypeEnumPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestLine.remarks]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    remarks: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestLine.updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    updateDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestLine.updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    updateTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestLine.creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creationDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[ApprovalRequestLine.creationTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    creationTime: ComplexTypeTimePropertyField<EntityT>;
    /**
     * Creates an instance of ApprovalRequestLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace ApprovalRequestLine {
    /**
     * Metadata information on all properties of the `ApprovalRequestLine` complex type.
     */
    const _propertyMetadata: PropertyMetadata<ApprovalRequestLine>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalRequestLine;
}
//# sourceMappingURL=ApprovalRequestLine.d.ts.map