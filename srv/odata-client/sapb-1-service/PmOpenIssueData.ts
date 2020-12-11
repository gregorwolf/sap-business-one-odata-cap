/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BoYesNoEnum } from './BoYesNoEnum';
import { ComplexTypeDatePropertyField, ComplexTypeEnumPropertyField, ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

/**
 * PmOpenIssueData
 */
export interface PmOpenIssueData {
  /**
   * Line Id.
   * @nullable
   */
  lineId?: number;
  /**
   * Stage Id.
   * @nullable
   */
  stageId?: number;
  /**
   * Area.
   * @nullable
   */
  area?: number;
  /**
   * Priority.
   * @nullable
   */
  priority?: number;
  /**
   * Remarks.
   * @nullable
   */
  remarks?: string;
  /**
   * Closed.
   * @nullable
   */
  closed?: BoYesNoEnum;
  /**
   * Solution Id.
   * @nullable
   */
  solutionId?: number;
  /**
   * Responsible.
   * @nullable
   */
  responsible?: number;
  /**
   * Entered By.
   * @nullable
   */
  enteredBy?: number;
  /**
   * Entered Date.
   * @nullable
   */
  enteredDate?: Moment;
  /**
   * Effort.
   * @nullable
   */
  effort?: number;
}

/**
 * @deprecated Since v1.6.0. Use [[PmOpenIssueData.build]] instead.
 */
export function createPmOpenIssueData(json: any): PmOpenIssueData {
  return PmOpenIssueData.build(json);
}

/**
 * PmOpenIssueDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class PmOpenIssueDataField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, PmOpenIssueData> {
  /**
   * Representation of the [[PmOpenIssueData.lineId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  lineId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('LineID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmOpenIssueData.stageId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  stageId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('StageID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmOpenIssueData.area]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  area: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Area', this, 'Edm.Int32');
  /**
   * Representation of the [[PmOpenIssueData.priority]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  priority: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Priority', this, 'Edm.Int32');
  /**
   * Representation of the [[PmOpenIssueData.remarks]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  remarks: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('Remarks', this, 'Edm.String');
  /**
   * Representation of the [[PmOpenIssueData.closed]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  closed: ComplexTypeEnumPropertyField<EntityT> = new ComplexTypeEnumPropertyField('Closed', this);
  /**
   * Representation of the [[PmOpenIssueData.solutionId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  solutionId: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('SolutionID', this, 'Edm.Int32');
  /**
   * Representation of the [[PmOpenIssueData.responsible]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  responsible: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Responsible', this, 'Edm.Int32');
  /**
   * Representation of the [[PmOpenIssueData.enteredBy]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enteredBy: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('EnteredBy', this, 'Edm.Int32');
  /**
   * Representation of the [[PmOpenIssueData.enteredDate]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enteredDate: ComplexTypeDatePropertyField<EntityT> = new ComplexTypeDatePropertyField('EnteredDate', this, 'Edm.DateTimeOffset');
  /**
   * Representation of the [[PmOpenIssueData.effort]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  effort: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('Effort', this, 'Edm.Double');

  /**
   * Creates an instance of PmOpenIssueDataField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, PmOpenIssueData);
  }
}

export namespace PmOpenIssueData {
  /**
   * Metadata information on all properties of the `PmOpenIssueData` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<PmOpenIssueData>[] = [{
    originalName: 'LineID',
    name: 'lineId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'StageID',
    name: 'stageId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Area',
    name: 'area',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Priority',
    name: 'priority',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Remarks',
    name: 'remarks',
    type: 'Edm.String',
    isCollection: false
  }, {
    originalName: 'Closed',
    name: 'closed',
    type: 'Edm.Enum',
    isCollection: false
  }, {
    originalName: 'SolutionID',
    name: 'solutionId',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'Responsible',
    name: 'responsible',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EnteredBy',
    name: 'enteredBy',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'EnteredDate',
    name: 'enteredDate',
    type: 'Edm.DateTimeOffset',
    isCollection: false
  }, {
    originalName: 'Effort',
    name: 'effort',
    type: 'Edm.Double',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): PmOpenIssueData {
    return deserializeComplexTypeV4(json, PmOpenIssueData);
  }
}
