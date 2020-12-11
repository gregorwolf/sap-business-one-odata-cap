/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { EcmActionLogTypeEnum } from './EcmActionLogTypeEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export function createEcmActionLog(json: any): EcmActionLog {
  return EcmActionLog.build(json);
}

/**
 * EcmActionLogField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionLogField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EcmActionLog> {
  /**
   * Representation of the [[EcmActionLog.actionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  actionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ActionID', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmActionLog.logId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogID', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmActionLog.type]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Type', this);
  /**
   * Representation of the [[EcmActionLog.message]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  message: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Message', this, 'Edm.String');
  /**
   * Representation of the [[EcmActionLog.data]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  data: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Data', this, 'Edm.String');
  /**
   * Representation of the [[EcmActionLog.logDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('LogDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EcmActionLog.logTime]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  logTime: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LogTime', this, 'Edm.Int32');
  /**
   * Representation of the [[EcmActionLog.exportFormat]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  exportFormat: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ExportFormat', this, 'Edm.Int32');

  /**
   * Creates an instance of EcmActionLogField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EcmActionLog);
  }
}

export namespace EcmActionLog {
  /**
   * Metadata information on all properties of the `EcmActionLog` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EcmActionLog>[] = [{
    originalName: 'ActionID',
    name: 'actionId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LogID',
    name: 'logId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Type',
    name: 'type',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'Message',
    name: 'message',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Data',
    name: 'data',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'LogDate',
    name: 'logDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'LogTime',
    name: 'logTime',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'ExportFormat',
    name: 'exportFormat',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EcmActionLog {
    return deserializeComplexTypeV4(json, EcmActionLog);
  }
}
