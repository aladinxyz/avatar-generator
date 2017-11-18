import * as React from 'react'
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap'

import {
  AccessoriesType,
  AllAccessoriesTypes,
  AllClotheColors,
  AllClotheTypes,
  AllEyeTypes,
  AllEyebrowTypes,
  AllMouthTypes,
  ClotheColor,
  ClotheColorValues,
  ClotheType,
  EyeType,
  EyebrowType,
  MouthType
} from './avatar'

export interface Props {
  eyeType: EyeType
  eyebrowType: EyebrowType
  mouthType: MouthType
  clotheType: ClotheType
  clotheColor: ClotheColor
  accessoriesType: AccessoriesType
  onEyeChange?: (eyeType: EyeType) => void
  onEyebrowChange?: (eyebrowType: EyebrowType) => void
  onMouthChange?: (mouthType: MouthType) => void
  onClotheChange?: (clotheType: ClotheType) => void
  onClotheColorChange?: (clotheColor: ClotheColor) => void
  onAccessoriesChange?: (accessoriesType: AccessoriesType) => void
  onDownload?: () => void
}

export default class AvatarForm extends React.Component<Props> {
  render () {
    const accessoriesOptions = AllAccessoriesTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const eyeOptions = AllEyeTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const eyebrowOptions = AllEyebrowTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const mouthOptions = AllMouthTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const clotheOptions = AllClotheTypes.map(type => (
      <option key={type} value={type}>
        {type}
      </option>
    ))
    const clotheColorOptions = AllClotheColors.map(type => (
      <option key={type} value={ClotheColorValues[type]}>
        {type}
      </option>
    ))
    const labelCol = 3
    const inputCol = 9
    return (
      <Form horizontal onSubmit={this.onDownload}>
        <FormGroup className='row' controlId='accessories'>
          <Col componentClass={ControlLabel} sm={labelCol}>
            👓 Accessories
          </Col>
          <Col sm={inputCol}>
            <FormControl
              componentClass='select'
              value={this.props.accessoriesType}
              onChange={this.onAccessoriesChange}>
              {accessoriesOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row' controlId='eyebrow'>
          <Col componentClass={ControlLabel} sm={labelCol}>
            ✏️ Eyebrow
          </Col>
          <Col sm={inputCol}>
            <FormControl
              componentClass='select'
              value={this.props.eyebrowType}
              onChange={this.onEyebrowChange}>
              {eyebrowOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row' controlId='eyes'>
          <Col componentClass={ControlLabel} sm={labelCol}>
            👁 Eyes
          </Col>
          <Col sm={inputCol}>
            <FormControl
              componentClass='select'
              value={this.props.eyeType}
              onChange={this.onEyeChange}>
              {eyeOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row' controlId='mouth'>
          <Col componentClass={ControlLabel} sm={labelCol}>
            👄 Mouth
          </Col>
          <Col sm={inputCol}>
            <FormControl
              componentClass='select'
              value={this.props.mouthType}
              onChange={this.onMouthChange}>
              {mouthOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row' controlId='clothe'>
          <Col componentClass={ControlLabel} sm={labelCol}>
            👔 Clothes
          </Col>
          <Col sm={inputCol}>
            <FormControl
              componentClass='select'
              value={this.props.clotheType}
              onChange={this.onClotheChange}>
              {clotheOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row' controlId='clotheColor'>
          <Col componentClass={ControlLabel} sm={labelCol}>
            ↳ Color Fabric
          </Col>
          <Col sm={inputCol}>
            <FormControl
              componentClass='select'
              value={this.props.clotheColor}
              onChange={this.onClotheColorChange}>
              {clotheColorOptions}
            </FormControl>
          </Col>
        </FormGroup>
        <FormGroup className='row'>
          <Col className='offset-sm-2' smOffset={labelCol} sm={inputCol}>
            More options coming soon ...
          </Col>
        </FormGroup>
        <FormGroup className='row'>
          <Col
            className={'offset-sm-' + labelCol}
            smOffset={labelCol}
            sm={inputCol}>
            <Button bsStyle='primary' type='submit'>
              <i className='fa fa-download' /> Download
            </Button>
            <div style={{ marginTop: '10px' }}>
              <a
                className='twitter-share-button'
                href={
                  'https://twitter.com/intent/tweet?text=' +
                  encodeURI('I just created my avataaars here 😆')
                }
                data-size='large'>
                Tweet
              </a>
            </div>
          </Col>
        </FormGroup>
      </Form>
    )
  }

  private onAccessoriesChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onAccessoriesChange) {
      this.props.onAccessoriesChange(
        ((event.target as any) as HTMLSelectElement).value as AccessoriesType
      )
    }
  }

  private onEyeChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onEyeChange) {
      this.props.onEyeChange(((event.target as any) as HTMLSelectElement)
        .value as EyeType)
    }
  }

  private onEyebrowChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onEyebrowChange) {
      this.props.onEyebrowChange(((event.target as any) as HTMLSelectElement)
        .value as EyebrowType)
    }
  }

  private onMouthChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onMouthChange) {
      this.props.onMouthChange(((event.target as any) as HTMLSelectElement)
        .value as MouthType)
    }
  }

  private onClotheChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onClotheChange) {
      this.props.onClotheChange(((event.target as any) as HTMLSelectElement)
        .value as ClotheType)
    }
  }

  private onClotheColorChange = (event: React.FormEvent<FormControl>) => {
    if (this.props.onClotheColorChange) {
      this.props.onClotheColorChange(
        ((event.target as any) as HTMLSelectElement).value as ClotheColor
      )
    }
  }

  private onDownload = (event: React.FormEvent<FormControl>) => {
    event.preventDefault()
    if (this.props.onDownload) {
      this.props.onDownload()
    }
  }
}
