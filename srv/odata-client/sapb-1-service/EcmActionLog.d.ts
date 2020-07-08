import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType } from '@sap-cloud-sdk/core/v4';
/**
 * EcmActionLog
 */
export interface EcmActionLog {
    /**
     * Action Id.
     * @nullable
     */
    actionId?: number;
    /**
     * Log Id.
     * @nullable
     */
    logId?: number;
    /**
     * Message.
     * @nullable
     */
    message?: string;
    /**
     * Data.
     * @nullable
     */
    data?: string;
    /**
     * Log Date.
     * @nullable
     */
    logDate?: Moment;
    /**
     * Log Time.
     * @nullable
     */
    logTime?: number;
    /**
     * Export Format.
     * @nullable
     */
    exportFormat?: number;
}
/**
 * @deprecated Since v1.6.0. Use [[EcmActionLog.build]] instead.
 */
export declare function createEcmActionLog(json: any): EcmActionLog;
/**
 * EcmActionLogField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class EcmActionLogField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
    /**
     * Representation of the [[EcmActionLog.actionId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    actionId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionLog.logId]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logId: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionLog.message]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    message: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionLog.data]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    data: ComplexTypeStringPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionLog.logDate]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logDate: ComplexTypeDatePropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionLog.logTime]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    logTime: ComplexTypeNumberPropertyField<EntityT>;
    /**
     * Representation of the [[EcmActionLog.exportFormat]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    exportFormat: ComplexTypeNumberPropertyField<EntityT>;
}
export declare namespace EcmActionLog {
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionLog;
}
//# sourceMappingURL=EcmActionLog.d.ts.map