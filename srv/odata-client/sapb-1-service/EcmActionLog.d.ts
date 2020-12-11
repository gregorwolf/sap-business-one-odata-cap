import { Moment } from 'moment';
import { EcmActionLogTypeEnum } from './EcmActionLogTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata } from '@sap-cloud-sdk/core';
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
     * Type.
     * @nullable
     */
    type?: EcmActionLogTypeEnum;
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
export declare class EcmActionLogField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionLog> {
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
     * Representation of the [[EcmActionLog.type]] property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type: ComplexTypeEnumPropertyField<EntityT>;
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
    /**
     * Creates an instance of EcmActionLogField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>);
}
export declare namespace EcmActionLog {
    /**
     * Metadata information on all properties of the `EcmActionLog` complex type.
     */
    const _propertyMetadata: PropertyMetadata<EcmActionLog>[];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json: {
        [keys: string]: FieldType;
    }): EcmActionLog;
}
//# sourceMappingURL=EcmActionLog.d.ts.map