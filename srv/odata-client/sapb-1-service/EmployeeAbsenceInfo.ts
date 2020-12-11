/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class EmployeeAbsenceInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeAbsenceInfo> {
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

  /**
   * Creates an instance of EmployeeAbsenceInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeAbsenceInfo);
  }
}

export namespace EmployeeAbsenceInfo {
  /**
   * Metadata information on all properties of the `EmployeeAbsenceInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeAbsenceInfo>[] = [{
    originalName: 'EmployeeID',
    name: 'employeeId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'LineNum',
    name: 'lineNum',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'FromDate',
    name: 'fromDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ToDate',
    name: 'toDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Reason',
    name: 'reason',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ApprovedBy',
    name: 'approvedBy',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'ConfirmerNumber',
    name: 'confirmerNumber',
    type: 'Edm.Int32',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeAbsenceInfo {
    return deserializeComplexTypeV4(json, EmployeeAbsenceInfo);
  }
}
