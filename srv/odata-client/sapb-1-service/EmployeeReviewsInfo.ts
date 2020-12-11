/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { ComplexTypeDatePropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * EmployeeReviewsInfo
 */
export interface EmployeeReviewsInfo {
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
   * Date.
   * @nullable
   */
  date?: Moment;
  /**
   * Review Description.
   * @nullable
   */
  reviewDescription?: string;
  /**
   * Manager.
   * @nullable
   */
  manager?: number;
  /**
   * Grade.
   * @nullable
   */
  grade?: string;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[EmployeeReviewsInfo.build]] instead.
 */
export function createEmployeeReviewsInfo(json: any): EmployeeReviewsInfo {
  return EmployeeReviewsInfo.build(json);
}

/**
 * EmployeeReviewsInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class EmployeeReviewsInfoField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, EmployeeReviewsInfo> {
  /**
   * Representation of the [[EmployeeReviewsInfo.employeeNo]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  employeeNo: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EmployeeNo', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeReviewsInfo.lineNum]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineNum: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineNum', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeReviewsInfo.date]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  date: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('Date', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[EmployeeReviewsInfo.reviewDescription]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  reviewDescription: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('ReviewDescription', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeReviewsInfo.manager]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  manager: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Manager', this, 'Edm.Int32');
  /**
   * Representation of the [[EmployeeReviewsInfo.grade]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  grade: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Grade', this, 'Edm.String');
  /**
   * Representation of the [[EmployeeReviewsInfo.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');

  /**
   * Creates an instance of EmployeeReviewsInfoField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, EmployeeReviewsInfo);
  }
}

export namespace EmployeeReviewsInfo {
  /**
   * Metadata information on all properties of the `EmployeeReviewsInfo` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<EmployeeReviewsInfo>[] = [{
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
    originalName: 'Date',
    name: 'date',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'ReviewDescription',
    name: 'reviewDescription',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Manager',
    name: 'manager',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Grade',
    name: 'grade',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): EmployeeReviewsInfo {
    return deserializeComplexTypeV4(json, EmployeeReviewsInfo);
  }
}
