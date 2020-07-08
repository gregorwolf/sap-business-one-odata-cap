/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

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
export function createEcmActionLog(json: any): EcmActionLog {
  return EcmActionLog.build(json);
}

/**
 * EcmActionLogField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EcmActionLogField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
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
}

export namespace EcmActionLog {
  export function build(json: { [keys: string]: FieldType }): EcmActionLog {
    return createComplexType(json, {
      ActionID: (actionId: number) => ({ actionId: edmToTs(actionId, 'Edm.Int32') }),
      LogID: (logId: number) => ({ logId: edmToTs(logId, 'Edm.Int32') }),
      Message: (message: string) => ({ message: edmToTs(message, 'Edm.String') }),
      Data: (data: string) => ({ data: edmToTs(data, 'Edm.String') }),
      LogDate: (logDate: Moment) => ({ logDate: edmToTs(logDate, 'Edm.DateTimeOffset') }),
      LogTime: (logTime: number) => ({ logTime: edmToTs(logTime, 'Edm.Int32') }),
      ExportFormat: (exportFormat: number) => ({ exportFormat: edmToTs(exportFormat, 'Edm.Int32') })
    });
  }
}
