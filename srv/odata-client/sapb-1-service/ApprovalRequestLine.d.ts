import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ComplexTypeTimePropertyField, Entity, FieldType, Time } from '@sap-cloud-sdk/core/v4';
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
export declare class ApprovalRequestLineField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}
export declare namespace ApprovalRequestLine {
    function build(json: {
        [keys: string]: FieldType;
    }): ApprovalRequestLine;
}
//# sourceMappingURL=ApprovalRequestLine.d.ts.map