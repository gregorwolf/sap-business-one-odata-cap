/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * EmployeeAbsenceInfo
 */
export interface EmployeeAbsenceInfo {
  /**
   * Employee Id.
   * @nullable
   */
  employeeId?: number;
  /**
   * Line Num.
   * @nullable
   */
  lineNum?: number;
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
   * Reason.
   * @nullable
   */
  reason?: string;
  /**
   * Approved By.
   * @nullable
   */
  approvedBy?: string;
  /**
   * Confirmer Number.
   * @nullable
   */
  confirmerNumber?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeAbsenceInfo.build]] instead.
 */
export function createEmployeeAbsenceInfo(json: any): EmployeeAbsenceInfo {
  return EmployeeAbsenceInfo.build(json);
}

/**
 * EmployeeAbsenceInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeAbsenceInfoField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[EmployeeAbsenceInfo.employeeId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeID', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeAbsenceInfo.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeAbsenceInfo.fromDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FromDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeAbsenceInfo.toDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ToDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeAbsenceInfo.reason]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reason: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Reason', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeAbsenceInfo.approvedBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  approvedBy: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ApprovedBy', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeAbsenceInfo.confirmerNumber]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  confirmerNumber: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('ConfirmerNumber', this, 'Edm.Int32');
}

export namespace EmployeeAbsenceInfo {
  export function build(json: { [keys: string]: FieldType }): EmployeeAbsenceInfo {
    return createComplexType(json, {
      EmployeeID: (employeeId: number) => ({ employeeId: edmToTs(employeeId, 'Edm.Int32') }),
      LineNum: (lineNum: number) => ({ lineNum: edmToTs(lineNum, 'Edm.Int32') }),
      FromDate: (fromDate: Moment) => ({ fromDate: edmToTs(fromDate, 'Edm.DateTimeOffset') }),
      ToDate: (toDate: Moment) => ({ toDate: edmToTs(toDate, 'Edm.DateTimeOffset') }),
      Reason: (reason: string) => ({ reason: edmToTs(reason, 'Edm.String') }),
      ApprovedBy: (approvedBy: string) => ({ approvedBy: edmToTs(approvedBy, 'Edm.String') }),
      ConfirmerNumber: (confirmerNumber: number) => ({ confirmerNumber: edmToTs(confirmerNumber, 'Edm.Int32') })
    });
  }
}
