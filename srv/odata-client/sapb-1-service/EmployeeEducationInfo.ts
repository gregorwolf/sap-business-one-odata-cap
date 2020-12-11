/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EmployeeEducationInfo
 */
export interface EmployeeEducationInfo {
  /**
   * Employee No.
   * @nullable
   */
  employeeNo?: number;
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
   * Education Type.
   * @nullable
   */
  educationType?: number;
  /**
   * Institute.
   * @nullable
   */
  institute?: string;
  /**
   * Major.
   * @nullable
   */
  major?: string;
  /**
   * Diploma.
   * @nullable
   */
  diploma?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeEducationInfo.build]] instead.
 */
export function createEmployeeEducationInfo(json: any): EmployeeEducationInfo {
  return EmployeeEducationInfo.build(json);
}

/**
 * EmployeeEducationInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeEducationInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeEducationInfo> {
  /**
   * Representation of the [[EmployeeEducationInfo.employeeNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeNo', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeEducationInfo.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeEducationInfo.fromDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fromDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('FromDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeEducationInfo.toDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  toDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('ToDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeEducationInfo.educationType]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  educationType: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EducationType', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeEducationInfo.institute]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  institute: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Institute', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeEducationInfo.major]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  major: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Major', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeEducationInfo.diploma]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  diploma: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Diploma', this, 'Edm.String');

  /**
   * Creates an instance of EmployeeEducationInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeEducationInfo);
  }
}

export namespace EmployeeEducationInfo {
  /**
   * Metadata information on all properties of the `EmployeeEducationInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeEducationInfo>[] = [{
    originalName: 'EmployeeNo',
    name: 'employeeNo',
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
    originalName: 'EducationType',
    name: 'educationType',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Institute',
    name: 'institute',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Major',
    name: 'major',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Diploma',
    name: 'diploma',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeEducationInfo {
    return deserializeComplexTypeV4(json, EmployeeEducationInfo);
  }
}
